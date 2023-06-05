import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Boss Resturant</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <Featured></Featured>
    </div>
  );
};

export default Home;
