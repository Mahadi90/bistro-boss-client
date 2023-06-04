import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularItem from '../PopularItem/PopularItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
        </div>
    );
};

export default Home;