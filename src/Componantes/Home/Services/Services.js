import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container my-3 text'>
            <h2>This is Services</h2>
            <div className='row'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
            </div>
        </div>
    );
};

export default Services;