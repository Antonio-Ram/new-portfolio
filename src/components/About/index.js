import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return(
        <section className='my-5' >
        <h1 id="about">Who am I?</h1>
        <div className='flex-row'>
         <img src={coverImage} className='my-2' style={{ width: "50%" }} alt="cover" />
            <p className='my-2'>I am newly initiatied developer! I have learned several languages that I feel confident working with and skills to learn new languages. 
            The course taught us how to handle new information and trouble shoot any errors or bugs we may experience. On top of that, we were taught 
            how to search for information we were missing and how to deal with frustrations that may occur. 
            Outside of coding, I am a University of Michigan graduate with a bachelors is Sociology.  This enabled me to look at the world from a different point of view, where
            I try to look at the familar as strange and the strange as fimiliar. This train of thought helps me learn new concepts in a more efficient way. Additionally, I have worked
            at the little Ceasar's franchisee help desk for the past 2 years. Working in this enviroment has given me access to work with and trouble shoot a wide
            range of devices and how it should interact with a SQL database. 
            </p>
        </div>
        </section>
    );
}

export default About;