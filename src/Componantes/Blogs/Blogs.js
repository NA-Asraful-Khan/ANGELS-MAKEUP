import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Blogs</h2>
            <div className='row text-dark text-start'>
                <h3>Question:  Difference between authorization and authentication.</h3>
                <p>Authentication is the process of determining the user’s identity via the available credentials, thus verifying the identity. Example:</p>
                <ul>
                    <li>Usernames or passwords can be used to establish one’s identity, thus gaining access to the system.</li>
                    <li>OTPs are another way to get access to the system for a single transaction</li>
                    <li>Apps that generate security codes via the third party, thus enabling access for the user</li>
                </ul>
                <p>Authorization, meanwhile, is the process of providing permission to access the system. Authorization often follows authentication and is listed as various types. They are:</p>
                <ul>
                    <li>Single-Factor Authentication- use only a username and password, thus enabling the user to access the system quite easily.</li>
                    <li>Two-level security asks for a two-step verification, thus authenticating the user to access the system. For this process, along with the username and password, some unique information including security questions, like first school name and such details, need to be answered. Or the user identity can also be verified with OTP.</li>
                </ul>
            </div>
            <div className='row text-muted text-start'>
                <h3>Quesion: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication provides backend services and easy-to-use SDKs to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
            </div>

            <div className='row text-dark text-start'>
                <h3>Question: What other services does firebase provide other than authentication?</h3>
                <p>Other Services of firefox is:</p>
                <ul>
                    <li>Realtime Database: Real-time data is the way of the future. Nothing compares to it.</li>
                    <li>File Storage: Firebase Storage provides a simple way to save binary files — most often images, but it could be anything — to Google Cloud Storage directly from the client!!!</li>
                    <li>Hosting: Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2.</li>
                    <li>Fully-Featured App Platform: The Firebase team has integrated a bunch of new and existing Google products with Firebase.</li>

                </ul>
            </div>
        </div>
    );
};

export default Blogs;