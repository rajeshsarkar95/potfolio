/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./contact.css";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact me</h1>
      <p className="subtitle">
        A high-quality solution for those who want <br />a beautiful startup
        website quickly.
      </p>
      <div className="contact-section">
        <p className="label">E-MAIL</p>
        <a href="mailto:info@topass.com" className="contact-info">
          prorajeshsarkar@gmail.com
        </a>
      </div>
      <div className="contact-section">
        <p className="label">PHONE</p>
        <p className="contact-info">91+9568755984</p>
      </div>
      <p className="label">Social</p>
      <div className="socials">
        <Link href="https://www.facebook.com/profile.php?id=100056700738524">
          <Image
            src="/social/feacbook.png"
            className="social-icon"
            width={20}
            height={20}
            alt="feacbook"
          />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=9568755984">
          <Image
            src="/social/Whatapp.png"
            className="social-icon"
            width={20}
            height={20}
            alt="whatapp"
          />
        </Link>
        <Link href="">
          <Image
            src="/social/p.png"
            className="social-icon"
            width={20}
            height={20}
            alt="p"
          />
        </Link>
        <Link href="https://x.com/Rajesh956875">
          <Image
            src="/social/twiter.png"
            className="social-icon"
            width={20}
            height={20}
            alt="twiter"
          />
        </Link>
        <Link href="">
          <Image
            src="/social/ni.png"
            className="social-icon"
            width={20}
            height={20}
            alt="linkedin"
          />
        </Link>
        <Link href="https://www.instagram.com/raj_e_sh_sarkar/">
          <Image
            src="/social/instagram.png"
            className="social-icon"
            width={20}
            height={20}
            alt="instagram"
          />
        </Link>
      </div>
      {/*  */}
    </div>
  );
}
export default Contact;
