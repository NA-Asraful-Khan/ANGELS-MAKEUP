import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSignin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        navigate('/home');
    }


    return (
        <div className='container my-5 py-5'>
            <h2>Log In</h2>
            <Form onSubmit={handleSignin} className='w-50 mx-auto text-start my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <button type='submit' className="btn btn-primary">Login</button>
                <p className="my-2">Want to Create New Account? <Link className="text-decoration-none text-primary" to="/signup">Click for Sign Up</Link></p>
            </Form>
        </div>
    );
};

export default Login;