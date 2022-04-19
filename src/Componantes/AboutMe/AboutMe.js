import React from 'react';
import profile from '../../Images/profile.jpg';

const AboutMe = () => {
    return (
        <div className='container'>
            <h2>About Me</h2>
            <img className='img-fluid rounded-circle w-25' src={profile} alt="" />
            <h3 className='my-2'>Nur A Asraful Khan</h3>
            <h4>Occupation: Student and Job Holder</h4>
            <h4>Job: Graphic Designer</h4>
            <h4>Current Education: BSc in CSE(1st Semester)</h4>
            <hr />
            <h4><b>Goal:</b> Right now I am a graphic Designer. But I always love coding. Love to solve the problem. Its give me satisfaction. And I enjoy to do this, no matter how much difficult it is. That's why my aim is to be a web developer and after that a software engineer</h4>
            <hr />
            <h4><b>Dedication:</b> I can't express how hard it was for me to do the job and my study and also go with the flow of this course and maintain the avarage <strong>58.44</strong>. And also I am submiting this Assaignment this assaignment in 50 marks deadline. Because I was unable to manage time for job and exam. But as always again I catch up the flow. And complete my assaignment. Now I belive and realize that I can work really hard for be a web developer.Because in this course I not only learn about how to be a developer also learn how to motivate myself always for my goal.</h4>
            
        </div>
    );
};

export default AboutMe;