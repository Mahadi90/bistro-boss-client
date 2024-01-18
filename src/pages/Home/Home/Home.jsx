import React from 'react';
import Banner from '../Banner/Banner';
import SliderSection from '../SliderSection/SliderSection';
import ChefService from '../cheifServices/ChefService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SliderSection></SliderSection>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;