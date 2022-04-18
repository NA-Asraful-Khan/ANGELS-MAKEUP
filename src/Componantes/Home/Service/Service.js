import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetData from '../../hooks/getData';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;

    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='flexing'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className='text-muted'>Price: ${price}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className='btn btn-primary w-100' to='checkout'>Checkout</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;
