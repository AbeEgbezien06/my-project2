import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";

const View = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Story books",
      text: "Here are books that increase your fantasy world imagination and help your reading habits",
    },
    {
      image: ChooseMeals,
      title: "Educational books",
      text: "Here are books give you a broad knowlegde about  science and how it works .",
    },
    {
      image: DeliveryMeals,
      title: "Productive books",
      text: "Here are books helps you to understand the ways of starting a businesss",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">View</p>
        <h1 className="primary-heading">Top Books</h1>
        <p className="primary-text">
         Get The Best Reading Experience.Here are some selection of our top books  
         categories for you to have a taste of our offer.Below are the our subject of our book books
        </p>
        <button className="secondary-button">
        <a href="https://my-project-self-eta.vercel.app/">View our Books < FiArrowRight /></a>
         </button>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;