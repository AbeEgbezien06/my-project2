import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Lot of Ebooks & Other books.100% Free
        </h1>
        <p className="primary-text">
         Studysphere is a daily growing list of links to freely accessible ebooks,
         documents and lecture notes found all over the internet. 
        </p>
        <p className="primary-text">
         You can submit your own ebooks, or add other resources you come across to our web app .
         Look below for the main directory of categories.We are in partner with openlibrary organisation to provide book and novel for our readers
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><a href="https://openlibrary.org/partner-with-us">Learn More</a></button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            <a href="https://youtu.be/kvYo4Xb96vw?si=c3qlh3ucC_3EFIy_" target="_blank" rel="noopener noreferrer">
            Watch Video</a> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
