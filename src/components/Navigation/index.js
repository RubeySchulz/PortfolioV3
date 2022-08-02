import React from 'react';

function Navigation({setNavSelected}) {
    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2 my-1'>
                    <span onClick={() => setNavSelected('AboutMe')}>About Me</span>
                </li>
                <li className='mx-2 my-1'>
                    <span onClick={() => setNavSelected('Portfolio')}>Porfolio</span>
                </li>
                <li className='mx-2 my-1'>
                    <span onClick={() => setNavSelected('Contact')}>Contact</span>
                </li>
                <li className='mx-2 my-1'>
                    <span onClick={() => setNavSelected('Resume')}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;