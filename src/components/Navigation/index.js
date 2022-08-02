import React from 'react';

function Navigation({navSelected, setNavSelected}) {
    return (
        <nav>
            <ul className='flex-row'>
                <li className={`mx-2 my-1 ${navSelected === 'AboutMe' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('AboutMe')}>About Me</span>
                </li>
                <li className={`mx-2 my-1 ${navSelected === 'Portfolio' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('Portfolio')}>Porfolio</span>
                </li>
                <li className={`mx-2 my-1 ${navSelected === 'Contact' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('Contact')}>Contact</span>
                </li>
                <li className={`mx-2 my-1 ${navSelected === 'Resume' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('Resume')}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;