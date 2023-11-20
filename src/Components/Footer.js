import React from "react";
import Logo from "../Assets/Logo.png";
import  { BsTwitter } from "react-icons/bs";
import  { SiLinkedin } from "react-icons/si";
import  { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
                </div>
        </div>
        <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonial</span>
                </div>
        </div>
        <div className="footer-section-columns">
                <span>+234-803-619-1085 </span>
                <span>studysphere@gmail.com</span>
                <span>studysphere@.com</span>
                <span>contact@book.com</span>
                <span>designed by ABE</span>
        </div>
        <div className="footer-section-columns">
                <span>Terms & Condition</span>
                <span>Privacy Policy</span>
        </div>
    </div>
  );
};

export default Footer