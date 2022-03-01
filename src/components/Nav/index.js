import React, { useState } from 'react';

function Nav(props) {
    
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        setPortfolioSelected,
        closeAll
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
                        <span onClick={() => closeAll()}>About Me</span>
                    </li>
                    <li className='mx-2'> 
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                   <li className='mx-2'>
                       <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
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
