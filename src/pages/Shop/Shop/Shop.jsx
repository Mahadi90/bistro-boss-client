import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderFood from "../OrderFood/OrderFood";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  
  

  return (
    <div>
      <Helmet>
        <title>Shop | Bistro Boss</title>
      </Helmet>

      <Cover
        bgImg={shopImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish"}
      ></Cover>

      <Tabs className={'my-10 mx-auto text-center'} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        <TabList className='text-xl font-bold text-gray-600 my-4'>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
          <Tab>OFFERED</Tab>
        </TabList>

        <TabPanel>
          <OrderFood items={salad}></OrderFood>
        </TabPanel>
        <TabPanel>
        <OrderFood items={pizza}></OrderFood>
        </TabPanel>
        <TabPanel>
        <OrderFood items={soup}></OrderFood>
        </TabPanel>
        <TabPanel>
        <OrderFood items={dessert}></OrderFood>
        </TabPanel>
        <TabPanel>
        <OrderFood items={drinks}></OrderFood>
        </TabPanel>
        <TabPanel>
        <OrderFood items={offered}></OrderFood>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
