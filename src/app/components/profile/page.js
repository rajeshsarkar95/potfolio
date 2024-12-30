"use client";
import Image from "next/image";
import "./profile.css";
import { useState } from "react";

function Profile() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "/profiles/profile.jpg",
      alt: "Profile",
      description:
        "Visited the pathology lab for tests, then captured pictures of my brother in the clinic.",
      likes: 0,
    },
    {
      id: 2,
      src: "/profiles/zym.jpg",
      alt: "Me and my friend Anuj in gym",
      description:
        "My friend and I went to the gym for an intense workout session and fun time.",
      likes: 0,
    },
    {
      id: 3,
      src: "/profiles/zym2.jpg",
      alt: "3 gym enthusiasts",
      description:
        "My friend Riki and I went to the gym for a workout last year in 2023, and my brother Vikash joined us.",
      likes: 0,
    },
    {
      id: 4,
      src: "/profiles/park.jpg",
      alt: "Park",
      description:
        "I’m heading to my business side, like a bee gathering honey for a successful venture.",
      likes: 0,
    },
    {
      id: 5,
      src: "/profiles/park2.jpg",
      alt: "Park 2",
      description:
        "I’m heading to my business side, like a bee gathering honey for a successful venture.",
      likes: 0,
    },
  ]);

  const handleLike = (id) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, likes: image.likes + 1 } : image
      )
    );
  };
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
              Hi there! I m Rajesh Sarkar, a passionate Frontend Developer with
              expertise in crafting responsive and dynamic websites. With skills
              in React.js, Next.js, and the MERN stack, I thrive on building
              modern, interactive user experiences. Beyond coding, I m deeply
              interested in SEO, digital marketing, and creating impactful
              solutions that drive engagement. Feel free to explore my work,
              connect for collaboration, or dive into insightful content. Let s
              create something extraordinary together!
            </p>
          </div>
        </div>
      </section>

      <div className="image-gallery">
        {images.map((image) => (
          <div className="image-gallery__card" key={image.id}>
            <Image
              className="image-gallery__card-image"
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
            />
            <div className="image-gallery__card-content">
              <h3 className="image-gallery__card-title">{image.alt}</h3>
              <p className="image-gallery__card-description">
                {image.description}
              </p>
            </div>
            <div className="image-gallery__card-buttons">
              <button
                onClick={() => handleLike(image.id)}
                className="image-gallery__button image-gallery__button--like"
              >
                Like {image.likes}
              </button>
              <button className="image-gallery__button image-gallery__button--comment">
                Comment
              </button>
              <button className="image-gallery__button image-gallery__button--share">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;
