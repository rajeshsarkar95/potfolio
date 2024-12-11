"use client"
import React, { useState } from "react";
import "./navbar.css";
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
            <Link href="">Home</Link>
            <Link href="">About me</Link>
            <Link href="">Project</Link>
            <Link href="">Contact</Link>
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
            <Link href="">Home</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="">About me</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="">Project</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link href="">Contact</Link>
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
