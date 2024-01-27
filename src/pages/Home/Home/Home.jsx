
import Banner from '../Banner/Banner';
import SliderSection from '../SliderSection/SliderSection';
import ChefService from '../cheifServices/ChefService';
import ParalaxSection from '../paralax/ParalaxSection';
import PopularMenu from '../popularMenu/PopularMenu';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <SliderSection></SliderSection>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>\
            <ParalaxSection></ParalaxSection>
        </div>
    );
};

export default Home;