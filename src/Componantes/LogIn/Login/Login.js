import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }
    const resetPassword = async (event) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!email) {
            return alert("Please input email");
        } else {
            await sendPasswordResetEmail(email);
            console.log('email sent');
        }


    };

    if (user) {
        navigate(from);
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='container my-5 py-5'>
            <h2>Log In</h2>
            <Form onSubmit={handleSignin} className='w-50 mx-auto text-start my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email}
                        onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement};
                <button type='submit' className="btn btn-primary">Login</button>
            </Form>
            <div className='container w-50 mx-auto'>
                <p className='text-start'>Want to Create New Account? <Link className="text-decoration-none text-primary " to="/signup">Click for Sign Up</Link></p>
                <p className=" text-start">Want to Create New Account? <button className="text-decoration-none text-primary btn" onClick={async () => {
                    if (!email) {
                        return toast("Please Input email");
                    } else {
                        await sendPasswordResetEmail(email);
                        toast('Password Reset Email Sent');
                    }
                }}>Reset Password</button></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;