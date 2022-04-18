import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer bg-dark py-2'>
            <p className='text-white mt-2'>Copyright &copy;{year} <Link className='text-decoration-none text-warning' to="/">ANGELS MAKEUP</Link> All Rights Reserved.</p>
        </div>
    );
};

export default Footer;