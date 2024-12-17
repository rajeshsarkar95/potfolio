"use client";  // Ensure it's a client-side component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./profile.css";

function Profile() {
  const [refreshCount, setRefreshCount] = useState(0);
  useEffect(() => {
    const storedCount = localStorage.getItem("refreshCount");
    if (storedCount) {
      setRefreshCount(parseInt(storedCount, 10));  
    }
  }, []);
  useEffect(() => {
    if (refreshCount !== 0) {
      localStorage.setItem("refreshCount", refreshCount);
    }
  }, [refreshCount]);
  const handleRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  setTimeout(()=>{
    handleRefresh
  },1000)

  return (
    <div>
      <section className="welcome-section">
        <div className="container">
          <div className="profile-image">
            <Image
              src="/profiles/profile.jpg"
              alt="Rajesh Sarkar"
              width={300}
              height={400}
            />
          </div>
          <div className="content">
            <h2 className="name">Rajesh Sarkar</h2>
            <p className="position">Software Developer</p>
            <h1 className="welcome-title">Welcome Message</h1>
            <p className="message">
              Hi there! Im Rajesh Sarkar, a passionate Frontend Developer with
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
            alt="Profile"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/zym.jpg"
            alt="Gym"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/zym2.jpg"
            alt="Gym 2"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/park.jpg"
            alt="Park"
            width={300}
            height={400}
          />
        </div>
        <div className="images_card">
          <Image
            className="galarry_images"
            src="/profiles/park2.jpg"
            alt="Park 2"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
