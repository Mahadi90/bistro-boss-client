import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ItemCard from "../../shared/itemCard/ItemCard";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Our popular menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 mb-10 mt-20 mx-2 md:mx-0">
        {popularMenu.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <div className="text-center mb-4">
     <button className="btn-outline p-2 text-black border-b-4 border-b-black rounded-xl">
        See more
      </button>
     </div>
    </section>
  );
};

export default PopularMenu;
