import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
   return (
      <div className="home-container">
         <Navbar/>
         <div className="home-banner-container">
            <div className="home-bannerImage-container">
             <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
            <h1 className="primary-heading">
            Study Smart , Hard  and Wide
            </h1>
            <p className="primary-text">
             Welcome to Studysphere E-library.Studysphere is an E-library web app that aims to be your go-to destination for all things educational & fictional -related , offering an engaging environment for learner of all level and interests.This website is now completely redesigned to be accessible to mobile devices with small screen sizes.
            </p>
            <button className="secondary-button"><a href="https://abeegbezien06.github.io/project1/">
            Sign up < FiArrowRight /></a>
            </button>
            </div>
            <div className="home-image-container">
            <img src={BannerImage} alt=""/>
            </div>
         </div>
      </div>
   );
};
 
 export default Home; 