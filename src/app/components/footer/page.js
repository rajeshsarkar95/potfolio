import React from 'react'
import "./footer.css"
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer_conatainer'>
       <footer>
        <div className="footer-column footer-info">
            <h3>Rajesh Sarkar</h3>
            <div className="contact">
                <p><a href="mailto:agensi@mail.com">prorajeshsarkar@gmail.com</a></p>
                <p>91+9568755984</p>
            </div>
            <div className="footer_socials">
          <Link href="https://www.facebook.com/profile.php?id=100056700738524">
            <Image
              style={{ color: "white" }}
              src="/social/feacbook.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="feacbook"
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=9568755984">
            <Image
              src="/social/Whatapp.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="whatapp"
            />
          </Link>
          <Link href="">
            <Image
              src="/social/p.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="p"
            />
          </Link>
          <Link href="https://x.com/Rajesh956875">
            <Image
              src="/social/twiter.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="twiter"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rajesh-sarkar-9777b0302/">
            <Image
              src="/social/ni.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="linkedin"
            />
          </Link>
          <Link href="https://www.instagram.com/raj_e_sh_sarkar/">
            <Image
              src="/social/instagram.png"
              className="footer_social-icon"
              width={20}
              height={20}
              alt="instagram"
            />
          </Link>
        </div>
        </div>
        <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="#" className="footer-list-link">Web Hosting</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Domains</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Premium Hosting</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Private Server</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">E-mail Hosting</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="#" className="footer-list-link">Pricing Plan</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Documentation</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Guide</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Tutorial</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="#" className="footer-list-link">About</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Blog</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Join Us</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Press</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Partners</a></li>
            </ul>
        </div>
    </footer>
    <div className="footer-bottom">
        <p>Design with love &copy; TanahAirStudio 2020. All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
