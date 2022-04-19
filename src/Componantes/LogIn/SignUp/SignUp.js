import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleSignup =async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(password.length<6){
            return alert("password should be minimum 6 character");
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (
        <div className='container my-4 py-5'>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSignup} className='w-50 mx-auto text-start'>
                <Form.Group  className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree With Terms And Condition" />
                </Form.Group>
                <button type='submit' className="btn btn-primary">Sign Up</button>
                <p>Already Have an Account? <Link className="text-decoration-none text-primary" to="/login">Click for Log In</Link></p>
            </Form>
        </div>
    );
};

export default SignUp;