import React from 'react';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <hr />
            <h2>My Work </h2>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;