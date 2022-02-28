import React, { useState } from 'react';

function Nav(props) {
    
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return(
        <header>
            <h2>
                <a href="/">
                    Antonio Ramirez
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="/" onClick={() => setContactSelected(false), setResumeSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className='mx-2'> 
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                   <li className='mx-2'>
                       <span>Portfolio</span>
                   </li>
                   <li className='mx-2'>
                       <span onClick={() => setResumeSelected(true)}>Resume</span>
                   </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;
