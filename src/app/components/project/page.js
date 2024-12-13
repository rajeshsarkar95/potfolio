"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./pajects.css";

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "technology", "lifestyle", "travel", "food"];
  const storiesList = [
    {
      id: 1,
      title: "Potfolio",
      category: "technology",
      date: "March 15, 2024",
      image: "/images/RajeshSarkar.png",
      excerpt:
        "Building dynamic, responsive, and user-friendly portfolios with interactive design and scalable architecture",
      author: "Rajesh Sarkar",
      Link: "https://rajeshsarkar.vercel.app/",
    },
    {
      id: 2,
      title: "Produc listing Page",
      category: "travel",
      date: "March 12, 2024",
      image: "/images/product.png",
      excerpt:
        "A dynamic product listing page built with React and Next.js, featuring sleek, responsive design and fast load times",
      author: "Rajesh Sarkar",
      Link: "https://productlisting-steel.vercel.app/",
    },
    {
      id: 3,
      title: "Unplash clone",
      category: "lifestyle",
      date: "March 10, 2024",
      image: "/images/unflash.png",
      excerpt:
        "A dynamic Unsplash clone built with React and Next.js, featuring sleek, responsive design and fast load times.",
      author: "Rajesh Sarkar",
      Link:"https://unplash-mu.vercel.app/"
    },
  ];

  const filteredStories =
    selectedCategory === "all"
      ? storiesList
      : storiesList.filter((story) => story.category === selectedCategory);

  return (
    <>
      <div className="stories-container">
        <h1 style={{ color: "white" }}>Projects</h1>
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="stories-grid">
          {filteredStories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={250}
                  layout="responsive"
                />
              </div>
              <div className="story-content">
                <span className="story-category">{story.category}</span>
                <h2>{story.title}</h2>
                <p className="story-excerpt">{story.excerpt}</p>
                <div className="story-meta">
                  <span className="author">{story.author}</span>
                  <span className="divider">•</span>
                  <span className="date">{story.date}</span>
                </div>
                <button
                  className="read-more"
                  onClick={() => window.open(story.Link, "_blank")}
                >
                  Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stories;
