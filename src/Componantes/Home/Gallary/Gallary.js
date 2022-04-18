import React from 'react';
import img1 from '../../../Images/1.jpg'
import img2 from '../../../Images/2.jpg'
import img3 from '../../../Images/3.jpg'
import img4 from '../../../Images/4.jpg'
import img5 from '../../../Images/5.jpg'
import img6 from '../../../Images/6.jpg'
import './Gallary.css'


const Gallary = () => {

    return (
        <div className='px-5 py-2'>
            <h2>My Work </h2>
            <div className='gridGallary'>
                <img className='img-fluid' src={img1} alt="" />
                <img className='img-fluid' src={img2} alt="" />
                <img className='img-fluid' src={img3} alt="" />
                <img className='img-fluid' src={img4} alt="" />
                <img className='img-fluid' src={img5} alt="" />
                <img className='img-fluid' src={img6} alt="" />
            </div>

        </div>
    );
};

export default Gallary;