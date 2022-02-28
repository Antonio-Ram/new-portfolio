import React from 'react';

function Nav(props) {
    
    const {
        contactSelected,
        setContactSelected
    } = props;

    return(
        <header>
            <h2>
                <a href="/">
                    Nav
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                   <li className='mx-1'>
                       <span>Portfolio</span>
                   </li>
                   <li className='mx-3'>
                       <span>Resume</span>
                   </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;
