import React from 'react';

function AboutMe() {
    return (
        <section>
            <h1>About Me</h1>
            <img src={require('../../assets/ruben.jpg')} alt='Ruben Schulz'></img>
            <p>
                My name is Ruben Schulz <br></br>
                I'm a full stack web developer and musician
            </p>
        </section>
    )
}

export default AboutMe;