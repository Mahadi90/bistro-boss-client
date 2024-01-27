import React from 'react';

const ItemCard = ({item}) => {

    const {image, name, price, recipe, _id} = item;

    return (
        <div className='flex'>
            <div>
                <img className='w-28 h-16' style={{borderRadius : "0 200px 200px 200px"}} src={image} alt="" />
            </div>
            <div className='ms-2'>
                <h3>{name}---------------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default ItemCard;