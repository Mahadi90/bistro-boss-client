import React from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import  './parallax.css';
import img from '../../../assets/home/featured.jpg'

const ParalaxSection = () => {
  return (
    <div className="my-10 parallax-p text-white pt-4 bg-fixed">
      <SectionTitle
        subHeading={"check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex px-28 py-14 justify-center items-center bg-black bg-opacity-20">
        <div className="">
            <img src={img} alt="" />
        </div>
        <div className="md:ml-4">
          <p>
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn-outline p-2 text-white mt-2 border-b-4 border-b-white rounded-xl">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ParalaxSection;
