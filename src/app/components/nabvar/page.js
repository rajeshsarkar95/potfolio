"use client";
import React, { useState } from "react";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";


function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <nav>
        <div className="logoname">
          <h2>Rajesh Sarkar</h2>
        </div>
        <div className="navigation">
          <ul>
            <li className="underline-effect">
              <Link href="/">Home</Link>
            </li>
            <li className="underline-effect">
              <Link href="#">About Me</Link>
            </li>
            <li className="underline-effect">
              <Link  href="/components/project">Projects</Link>
            </li>
            <li className="underline-effect">
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleSidebar}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="#">About me</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="/components/project">Projects</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="#">Contact</Link>
          </li>
        </ul>

      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}

export default Navbar;
