import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container my-5 py-5'>
            <h2>Log In</h2>
            <Form className='w-50 mx-auto text-start my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button className="btn btn-primary">Login</button>
                <p className="my-2">Want to Create New Account? <Link className="text-decoration-none text-primary" to="/signup">Click for Sign Up</Link></p>
            </Form>
        </div>
    );
};

export default Login;