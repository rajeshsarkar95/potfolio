import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer_conatainer'>
       <footer>
        <div className="footer-column footer-info">
            <h3>Rajesh Sarkar</h3>
            <p>Funding freemium long tail hypotheses first mover advantage assets ownership</p>
            <div className="contact">
                <p><a href="mailto:agensi@mail.com">prorajeshsarkar@gmail.com</a></p>
                <p>91+9568755984</p>
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
        <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-list">
                <li className="footer-list-item"><a href="#" className="footer-list-link">Claim</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Privacy</a></li>
                <li className="footer-list-item"><a href="#" className="footer-list-link">Terms</a></li>
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
