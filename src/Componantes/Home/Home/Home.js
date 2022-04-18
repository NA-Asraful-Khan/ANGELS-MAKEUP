import React from 'react';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;