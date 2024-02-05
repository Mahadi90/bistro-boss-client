import React, { useState } from 'react';
import FoodCard from '../../shared/FoodCard/FoodCard';
import Pazinaton from './Pazinaton';

const OrderFood = ({items}) => {
     
    const [currentpage, setCurrentPage] = useState(1);
    const postperPage = 6;

    const lastItemIndex = currentpage * postperPage;
    const firstItemIndex = lastItemIndex - postperPage;
    const currentItems = items.slice(firstItemIndex, lastItemIndex)

    return (
      <>
        <div className='grid md:grid-cols-3 gap-10'>
            {
                currentItems.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
        </div>
        <Pazinaton
        totalItems={items.length}
        itemsperPage={postperPage}
        setCurrentPage={setCurrentPage}
        currentpage={currentpage}
        ></Pazinaton>
      </>
    );
};

export default OrderFood;