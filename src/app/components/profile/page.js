"use client"; // Ensure it's a client-side component
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

      <div className="image-gallery">
        {[
          {
            src: "/profiles/profile.jpg",
            alt: "Profile",
            description:
              "Visited the pathology lab for tests, then captured pictures of my brother in the clinic.",
          },
          {
            src: "/profiles/zym.jpg",
            alt: "me and my friend anuj in zym",
            description:"My friend and I went to the gym for an intense workout session and fun time."
          },
          {
            src: "/profiles/zym2.jpg",
            alt: "hey there are 3 zymnist boy",
            description:"my friend riki and me going to gym for workout last year in 2023 and also my brother was there and name is vikash"
          },
          { src: "/profiles/park.jpg", alt: "Park",
            description:"I’m heading to my business side, like a bee gathering honey for a successful venture."

          },
          { src: "/profiles/park2.jpg", alt: "Park ",
            description:"I’m heading to my business side, like a bee gathering honey for a successful venture."
           },
        ].map((image, index) => (
          <div className="image-gallery__card" key={index}>
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
              <button className="image-gallery__button image-gallery__button--like">
                Like
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
