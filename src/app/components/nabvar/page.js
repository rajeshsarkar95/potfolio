/* eslint-disable jsx-a11y/alt-text */
"use client";
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { BsToggleOff } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../context/Appcontext";

import { BsToggleOn } from "react-icons/bs";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { toggleColorMode, colormode } = useAppContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <nav
        style={{
          backgroundColor: colormode ? "white" : "",
          padding: "10px",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <div className="logoname">
          <h2
            style={{
              color: colormode ? "black" : " ",
            }}
          >
            Rajesh Sarkar
          </h2>
        </div>
        <div className="navigation">
          {colormode ? (
            <i
              style={{
                color: colormode ? "black" : "",
              }}
              className="color_button"
              onClick={toggleColorMode}
            >
              <BsToggleOn />
            </i>
          ) : (
            <i className="color_button" onClick={toggleColorMode}>
              <BsToggleOff />
            </i>
          )}
          <ul>
            <li className="underline-effect">
              <Link
                style={{
                  color: colormode ? "black" : " ",
                }}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="underline-effect">
              <Link
                style={{
                  color: colormode ? "black" : " ",
                }}
                href="/components/profile"
              >
                About Me
              </Link>
            </li>
            <li className="underline-effect">
              <Link
                style={{
                  color: colormode ? "black" : " ",
                }}
                href="/components/project"
              >
                Projects
              </Link>
            </li>
            <li className="underline-effect">
              <Link
                style={{
                  color: colormode ? "black" : " ",
                }}
                href="/components/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="colormode_icon">
          {colormode ? (
            <i
              style={{
                color: colormode ? "black" : "",
              }}
              className="color_button"
              onClick={toggleColorMode}
            >
              <BsToggleOn />
            </i>
          ) : (
            <i className="color_button" onClick={toggleColorMode}>
              <BsToggleOff />
            </i>
          )}
        </div>
        <div
          className={`hamburger ${colormode ? "active" : ""}`}
          onClick={toggleSidebar}
        >
          <div
            style={{
              backgroundColor: colormode ? "black" : "white",
            }}
            className="bar"
          ></div>
          <div
            style={{
              backgroundColor: colormode ? "black" : "white",
            }}
            className="bar"
          ></div>
          <div
            style={{
              backgroundColor: colormode ? "black" : "white",
            }}
            className="bar"
          ></div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleSidebar}>
            <IoMdHome /> <Link href="/">Home</Link>
          </li>
          <li onClick={toggleSidebar}>
            <FcAbout /> <Link href="/components/profile">About me</Link>
          </li>
          <li onClick={toggleSidebar}>
            <GrProjects /> <Link href="/components/project">Projects</Link>
          </li>
          <li onClick={toggleSidebar}>
            <GrContact /> <Link href="/components/contact">Contact</Link>
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
