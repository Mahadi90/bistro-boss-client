import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import ItemCard from '../../shared/itemCard/ItemCard';

const PopularMenu = () => {
 
    const [menues, setMenues] = useState([])

  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const popularMenues =  data.filter(item => item.category === 'popular')
        setMenues(popularMenues)
    })
  },[])

//   console.log(menues)

    return (
        <section>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'Our popular menu'}
            >

            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-4 mb-10 mt-20 mx-2 md:mx-0'>
                {
                    menues.map(item => <ItemCard
                    key={item._id}
                    item={item}
                    ></ItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;