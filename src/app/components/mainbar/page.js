import React from "react";
import "./mainbar.css";
import Image from "next/image";

function Mainbar() {
  return (
    <div>
      <div className="Main_conatainer">
        <div className="profile_section">
          <h3>Hello, i’m</h3>
          <h1>Rajesh Sarkar</h1>
          <p>
            Freelance Softwere developer, Fullstack developer, & Data Miner. <br />I
            create seamless web experiences for end-users.
          </p>
          <div className="profile_button">
            <button className="aboutme">About me</button>
            <button className="project">Project</button>
          </div>
        </div>
        <div className="profile_image">
          <Image
            src="/images/profile.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="experience_profile">
        <div className="experience">
          <h1 className="about_me">About me:</h1>
          <p style={{opacity:"0.5"}}>
          Hi, I m Rajesh Sarkar, a passionate frontend developer with a focus on creating dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, React.js, and the MERN stack, I specialize in building intuitive and user-friendly websites. I am constantly learning new technologies and refining my skills to stay ahead of the curve in the ever-evolving world of web development. Join me as I share tips, tutorials, and insights on frontend development to help you build seamless and visually appealing websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
