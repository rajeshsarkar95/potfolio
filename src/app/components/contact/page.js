import React from "react";
import "./contact.css";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">
        A high-quality solution for those who want <br /> a beautiful startup
        website quickly.
      </p>
      <div className="contact-section">
        <p className="contact-label">E-MAIL</p>
        <a href="mailto:info@topass.com" className="contact-info">
          prorajeshsarkar@gmail.com
        </a>
      </div>
      <div className="contact-section">
        <p className="contact-label">PHONE</p>
        <p className="contact-info">91+9568755984</p>
      </div>
      <p className="contact-label">Social</p>
      <div className="contact-socials">
        <Link href="https://www.facebook.com/profile.php?id=100056700738524">
          <Image
            src="/social/facebook.png"
            className="social-icon"
            width={20}
            height={20}
            alt="Facebook"
          />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=9568755984">
          <Image
            src="/social/whatsapp.png"
            className="social-icon"
            width={20}
            height={20}
            alt="WhatsApp"
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/pinterest.png"
            className="social-icon"
            width={20}
            height={20}
            alt="Pinterest"
          />
        </Link>
        <Link href="https://x.com/Rajesh956875">
          <Image
            src="/social/twitter.png"
            className="social-icon"
            width={20}
            height={20}
            alt="Twitter"
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/linkedin.png"
            className="social-icon"
            width={20}
            height={20}
            alt="LinkedIn"
          />
        </Link>
        <Link href="https://www.instagram.com/raj_e_sh_sarkar/">
          <Image
            src="/social/instagram.png"
            className="social-icon"
            width={20}
            height={20}
            alt="Instagram"
          />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
