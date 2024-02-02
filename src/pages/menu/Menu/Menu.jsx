import React from "react";
import Cover from "../../shared/Cover/Cover";
import menubg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";
import useMenu from "../../hooks/useMenu";
import categoryImg from "../../../assets/home/chef-service.jpg";
import { Helmet } from "react-helmet";

const Menu = () => {
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
        <title>Menu | Bistro Boss</title>
      </Helmet>

      <Cover
        bgImg={menubg}
        title={"OUR MENU"}
        description={"Would you like to try a dish"}
      ></Cover>

      <SectionTitle
        heading={"Dont miss"}
        subHeading={"TODAYS OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered} title={'offered'}></MenuCategory>

      <Cover
        bgImg={categoryImg}
        title={"DESSERT"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={dessert} title='dessert'></MenuCategory>

      <Cover
        bgImg={categoryImg}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={pizza} title='pizza'></MenuCategory>

      <Cover
        bgImg={categoryImg}
        title={"SALAD"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={salad} title='salad'></MenuCategory>

      <Cover
        bgImg={categoryImg}
        title={"SOUP"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={soup} title='soup'></MenuCategory>

      <Cover
        bgImg={categoryImg}
        title={"DRINKS"}
        description={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={drinks} title='drinks'></MenuCategory>
    </div>
  );
};

export default Menu;
