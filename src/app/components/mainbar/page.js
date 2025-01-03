"use client";
import React, { useState, useEffect } from "react";
import "./mainbar.css";
import { IoMdClose } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../context/Appcontext";

function Mainbar() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { colormode, notification, showNotification } = useAppContext();
  
  const texts = [
    "Frontend",
    "React.Js",
    "Next.js",
    "Tailwind CSS",
    "Html",
    "CSS",
    "Javascript",
    "Backend",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tools",
    "Git",
    "Github",
    "Cursor Ai",
    "Chat Gpt",
  ];

  const typingSpeed = 100;
  const delay = 2000;
  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayedText("");
            setCharIndex(0);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, delay);
        }
      }, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [currentTextIndex, charIndex, texts, typingSpeed, delay]);
  const [isopen, setIsopen] = useState(false);
  const togglePopup = () => {
    setIsopen(!isopen);
  };
  return (
    <div
      style={{
        backgroundColor: colormode ? "white" : "rgb(12, 12, 41",
      }}
    >
      <div
        style={{
          backgroundColor: colormode ? "white" : "",
        }}
        className="Main_conatainer"
      >
        <div className="profile_section">
          <h1
            style={{
              color: colormode ? "black" : "",
            }}
            className="hello_name"
          >
            Hello, i’m
          </h1>
          <div className="typing_effect">
            <h1
              style={{
                color: colormode ? "black" : "",
              }}
            >
              Rajesh Sarkar{" "}
            </h1>
            <h1 className="typing_effect_heading">{displayedText}</h1>
          </div>
          <p
            style={{
              color: colormode ? "black" : "",
            }}
            className="my_difination"
          >
            Freelance Softwere developer, Fullstack developer, & Data Miner.{" "}
            <br />I create seamless web experiences for end-users.
          </p>
          <div className="profile_button">
            <button
              style={{
                backgroundColor: colormode ? "#1E293B" : "",
              }}
              onClick={togglePopup}
              className="aboutme"
            >
              About me{" "}
            </button>
            <a 
            style={{
              backgroundColor: colormode ? "#1E293B" : "",
            }}
            className="download-link"
            href="/cv/Rajehssarkar.pdf" download="RajeshSarkar.pdf">
              <button className="project">
                Download cv <FaDownload />
              </button>
            </a>
          </div>
        </div>
        {isopen && (
          <div className="popup">
            <div className="popup-inner">
              <div className="introduction">
                <h2
                  style={{
                    margin: "0",
                  }}
                >
                  About me
                </h2>
                <i onClick={togglePopup}>
                  <IoMdClose />
                </i>
              </div>
              <p className="my_intro">
                My name is Rajesh Sarkar , and I am a MERN stack developer with
                a strong focus on website development and React.js. I m also
                skilled in SEO and have experience building full-stack projects.
                Currently pursuing a Bachelor of Computer Applications,software
                engineering (BCA), I am passionate about technology and aspire
                to become a successful entrepreneur. I create content on coding
                and web development on my YouTube channel, where I share my
                knowledge to help others in the tech community. I m fluent in
                Bengali, Hindi, and English{" "}
              </p>
              <h2 style={{ margin: "0" }}>Skills</h2>
              <div className="icon">
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/HTML5.png"
                      alt="html5"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>HTML5</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/CSS3.png"
                      alt="css3"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>CSS3</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/javascript.png"
                      alt="javascript"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>JavaScript</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/React.png"
                      alt="reactjs"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>React js</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/Nodejs.png"
                      alt="nodejs"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>NodeJs</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/vs.png"
                      alt="vs code"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>VS code</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/Shape.png"
                      alt="Git"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>Git</h6>
                </div>
                <div className="skills_icon">
                  <i>
                    <Image
                      className="skill_ico"
                      src="/icon/npm.png"
                      alt="Npm"
                      width={20}
                      height={20}
                    />
                  </i>
                  <h6>NPM</h6>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            backgroundColor: colormode ? "#1E293B" : "",
          }}
          className="profile_image"
        >
          <Image
            src="/images/profile.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        {showNotification && (
          <div className="notification">
            <p>{notification}</p>
          </div>
        )}
      </div>
      <div className="hire_me">
      <Link
        href="https://wa.me/919568755984?text=Hi%20Rajesh!%20Nice%20to%20meet%20you.%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.
"
        className="hireme_button"  
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"  
          alt="WhatsApp"
          className="hireme_image"
        />
      </Link>
    </div>

      <div
        style={{
          backgroundColor: colormode ? "white" : "",
        }}
        className="experience_profile"
      >
        <div
          style={{
            backgroundColor: colormode ? "white" : "rgb(12, 12, 41",
          }}
          className="experience"
        >
          <h1
            style={{
              color: colormode ? "black" : "",
            }}
            className="about_me"
          >
            About me
          </h1>
          <p
            className="paragraf"
            style={{
              opacity: "0.5",
              color: colormode ? "black" : "",
            }}
          >
            Hi, I m Rajesh Sarkar, a passionate frontend developer with a focus
            on creating dynamic and responsive web applications. With expertise
            in HTML, CSS, JavaScript, React.js, and the MERN stack, I specialize
            in building intuitive and user-friendly websites. I am constantly
            learning new technologies and refining my skills to stay ahead of
            the curve in the ever-evolving world of web development. Join me as
            I share tips, tutorials, and insights on frontend development to
            help you build seamless and visually appealing websites.
          </p>
          <h1
            style={{
              color: colormode ? "black" : "",
            }}
            className="about_me"
          >
            Experience
          </h1>
        </div>
        <div style={{
          backgroundColor:colormode ? 'white' : '',
          border:colormode ? '1px solid black' : '',
        }} className="experience-card">
          <div className="experience-header">
            <img
              src="https://cdn.worldvectorlogo.com/logos/upwork-1.svg"
              alt="Upwork Logo"
              className="company-logo"
            />
            <div>
              <h2 style={{color: colormode? 'black' : ''}}  className="job-title">Frontend Developer</h2>
              <p className="duration">Nov 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mainbar;
