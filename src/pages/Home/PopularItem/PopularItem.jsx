import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const PopularItem = () => {

   const [menu, setMenu] = useState([])
   useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const popularItem = data.filter(item => item.category === 'popular')
        setMenu(popularItem)
    })
   },[])

    return (
        <div className='my-6'>
            <SectionTitle 
            subHeading={'---Check it out---'}
            Heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='block mx-auto mt-6  border-b-2 border-b-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white duration-500 '>View FUll Menu</button>
        </div>
    );
};

export default PopularItem;