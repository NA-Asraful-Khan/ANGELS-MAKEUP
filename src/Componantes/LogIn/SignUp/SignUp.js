import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container my-4 py-5'>
            <h2>Sign Up</h2>
            <Form className='w-50 mx-auto text-start'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree With Terms And Condition" />
                </Form.Group>
                <button className="btn btn-primary">Sign Up</button>
                <p>Already Have an Account? <Link className="text-decoration-none text-primary" to="/login">Click for Log In</Link></p>
            </Form>
        </div>
    );
};

export default SignUp;