import React from "react";
import Image from "next/image";
import "./profile.css";

function Profile() {
  return (
    <div>
      <section className="welcome-section">
        <div className="container">
          <div className="profile-image">
            <Image
              src="/profiles/profile.jpg"
              alt="John Doe"
              width={300}
              height={400}
            />
          </div>
          <div className="content">
            <h2 className="name">Rajesh Sarkar</h2>
            <p className="position">Softwere Developer</p>
            <h1 className="welcome-title">Welcome Message</h1>
            <p className="message">
              Hi there! I m Rajesh Sarkar, a passionate Frontend Developer with
              expertise in crafting responsive and dynamic websites. With skills
              in React.js, Next.js, and the MERN stack, I thrive on building
              modern, interactive user experiences. Beyond coding, Im deeply
              interested in SEO, digital marketing, and creating impactful
              solutions that drive engagement. Feel free to explore my work,
              connect for collaboration, or dive into insightful content. Lets
              create something extraordinary together!
            </p>
          </div>
        </div>
      </section>
      <div className="images_gallary">
        <div className="images_card">
          <Image
            src="/profiles/profile.jpg"
            alt="John Doe"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/zym.jpg"
            alt="John Doe"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/zym2.jpg"
            alt="John Doe"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/park.jpg"
            alt="John Doe"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/park2.jpg"
            alt="John Doe"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
