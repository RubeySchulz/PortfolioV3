import React from 'react';
import Navigation from '../Navigation';

function Header({setNavSelected}) {

    return (
        <header className="flex-row px-2">
            <h1>Ruben Schulz</h1>
            <Navigation setNavSelected={setNavSelected}></Navigation>
        </header>
    )
}

export default Header;