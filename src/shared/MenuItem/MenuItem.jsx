import React from 'react';

const MenuItem = ({item}) => {

    const { image, recipe, price, name}  = item;

    return (
        <div className='flex space-x-4 items-center'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className='h-20 w-20' src={image} alt="" />
            <div className='space-y-1'>
                <h3 className='text-xl text-gray-500'>{name}---------------------</h3>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;