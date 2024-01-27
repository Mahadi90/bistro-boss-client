
import Banner from '../Banner/Banner';
import SliderSection from '../SliderSection/SliderSection';
import ChefService from '../cheifServices/ChefService';
import ParalaxSection from '../paralax/ParalaxSection';
import PopularMenu from '../popularMenu/PopularMenu';
import Testimonial from '../testimonial/Testimonial';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <SliderSection></SliderSection>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <ParalaxSection></ParalaxSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;