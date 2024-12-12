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
            <li class="underline-effect">
              <Link href="">Home</Link>
            </li>
            <li class="underline-effect">
              <Link href="">About Me</Link>
            </li>
            <li class="underline-effect">
              <Link href="">Project</Link>
            </li>
            <li class="underline-effect">
              <Link href="">Contact</Link>
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
        <Link href="">
          <Image src="" alt="" />
        </Link>
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}

export default Navbar;
