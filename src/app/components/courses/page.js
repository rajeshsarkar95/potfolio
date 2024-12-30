/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import "./courses.css";

const images = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661909267383-58991abdca51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-photo/portrait-cheerful-young-girl-holding-books_171337-1639.jpg?t=st=1735537497~exp=1735541097~hmac=fcc87b7b9153e2a39f5fa7bc99ef591b9f141db5666531296db8bbcc416120b9&w=900",
];

const courses = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: " A Guide for Class 10th Students",
    price: "98",
    category: "10th",
    duration: "22hr 30min",
    courses: "34",
    sales: "250",
    link: "https://unacademy.com/goal/cbse-class-10/GSZGO/classes",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Guide for Class 11th Students",
    price: "120",
    category: "11th",
    duration: "30hr 15min",
    courses: "40",
    sales: "300",
    link:"https://unacademy.com/goal/cbse-class-12/PLWCX",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Guide for Class 12th Students",
    price: "75",
    category: "12th",
    duration: "18hr 45min",
    courses: "25",
    sales: "200",
    link:"https://unacademy.com/search/12th?source=Free+Home+Page"
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Guide for Class BCA Students",
    price: "75",
    category: "Computer Application",
    duration: "18hr 45min",
    courses: "25",
    sales: "200",
  },
];

const teachersData = [
  {
    id: 1,
    name: "Matthew E. McNatt",
    role: "Professor at Orange Brown College",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
    image:
      "https://media.istockphoto.com/id/2160473960/photo/happy-satisfied-math-teacher-in-elementary-class.jpg?s=1024x1024&w=is&k=20&c=yaNIeMIMB9sjMjAwc9l3AVxnz-ByOKYf2pXbMxZvYec=",
  },
  {
    id: 2,
    name: "Tracy D. Wright",
    role: "Professor at Orange Brown College",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
    image:
      "https://media.istockphoto.com/id/1992829731/photo/portrait-of-a-happy-teacher-smiling-at-the-university.jpg?s=1024x1024&w=is&k=20&c=DpwWWskqekah-PaK900xv77bf7Lp_B9r1dlOsjYq1So=",
  },
  {
    id: 3,
    name: "Cynthia A. Nelson",
    role: "Professor at Orange Brown College",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
    image: "https://media.istockphoto.com/id/2150364919/photo/learning-through-play.jpg?s=1024x1024&w=is&k=20&c=vVxjrVz9AlAkkvul_WJS9Y-85JF5l0wrUwEqXDZZc98=",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel-container">
        <button
          onClick={handlePrev}
          className="carousel-button carousel-button-prev"
        >
          ❮
        </button>
        <div className="carousel-wrapper">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button
          onClick={handleNext}
          className="carousel-button carousel-button-next"
        >
          ❯
        </button>
      </div>
      {/* cards */}
      <div className="details_heading">
        <h1>Our Track</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi </p>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-content">
              <h5 className="course-category">{course.category}</h5>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-price">${course.price}</p>
              <div className="course-details">
                <span>{course.duration}</span>
                <span>{course.courses} Courses</span>
                <span>{course.sales} Sales</span>
              </div>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                <button className="join-button">Join Course</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="details_heading">
        <h1>Our Teachers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi </p>
      </div>
      {/*  techar section */}
      <div className="teachers-section">
        <div className="teachers-container">
          {teachersData.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="teacher-image">
                <img src={teacher.image} alt={teacher.name} />
              </div>
              <div className="teacher-info">
                <h3 className="teacher-name">{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
                <p className="teacher-description">{teacher.description}</p>
                <p className="teacher-subject">{teacher.subject}</p>
                <div className="social-links">
                  <a
                    href={teacher.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={teacher.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
