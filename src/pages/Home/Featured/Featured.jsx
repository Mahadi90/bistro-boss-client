import React from 'react';
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className='my-6 featured-div text-white'>
            <SectionTitle
            subHeading={'Check it out'}
            Heading='FROM OUR MENU'
            ></SectionTitle>
            <div className='md:flex items-center pb-20 pt-12 px-32'>
                <div><img className='' src={featuredImg} alt="" /></div>
                <div className='md:ml-8 space-y-2'>
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=' mt-4  border-b-2 border-b-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white duration-500 '>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;