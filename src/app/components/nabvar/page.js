/* eslint-disable jsx-a11y/alt-text */
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
              <Link href="/components/project">Projects</Link>
            </li>
            <li className="underline-effect">
              <Link href="/components/contact">Contact</Link>
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
            <Link href="/components/contact">Contact</Link>
          </li>
        </ul>
        {/* socail media */}
        <div className="nav_socials">
          <Link href="https://www.facebook.com/profile.php?id=100056700738524">
            <Image
              style={{ color: "white" }}
              src="/social/feacbook.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="feacbook"
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=9568755984">
            <Image
              src="/social/Whatapp.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="whatapp"
            />
          </Link>
          <Link href="">
            <Image
              src="/social/p.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="p"
            />
          </Link>
          <Link href="https://x.com/Rajesh956875">
            <Image
              src="/social/twiter.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="twiter"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rajesh-sarkar-9777b0302/">
            <Image
              src="/social/ni.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="linkedin"
            />
          </Link>
          <Link href="https://www.instagram.com/raj_e_sh_sarkar/">
            <Image
              src="/social/instagram.png"
              className="nav_social-icon"
              width={20}
              height={20}
              alt="instagram"
            />
          </Link>
        </div>
        {/* end */}
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}

export default Navbar;
