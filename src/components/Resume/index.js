import React from 'react';

function Resume() {
    return (
        <section>
            <h1>My incredible lil resume</h1>
            <a href='https://drive.google.com/file/d/1pRugC9S-ByOSkHm8xUuATcRFxaB8eyWW/view?usp=sharing' className='my-2'>Download Resume Here</a>

            <div className='resume-content'>
                <h2>Front End Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                </ul>

                <h2>Back End Skills</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL and Sequelize</li>
                    <li>REST</li>
                    <li>Mongo</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;