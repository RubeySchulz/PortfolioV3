import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            name: 'Budget Tracker',
            link: 'https://arcane-hamlet-76147.herokuapp.com/',
            github: 'https://github.com/RubeySchulz/budget-application'
        },
        {
            name: 'Original Portfolio',
            link: 'https://rubeyschulz.github.io/Connors-Portfolio/',
            github: 'https://github.com/RubeySchulz/Connors-Portfolio'
        },
        {
            name: 'Zookeepr',
            link: 'https://evening-cliffs-40309.herokuapp.com/',
            github: 'https://github.com/RubeySchulz/zookeepr'
        },
        {
            name: 'Note Taker',
            link: 'https://note-taker-2324.herokuapp.com/',
            github: 'https://github.com/RubeySchulz/Note-Taker'
        },
        {
            name: 'Pizza-Hunt',
            link: 'https://dry-taiga-97602.herokuapp.com/',
            github: 'https://github.com/RubeySchulz/pizza_hunt'
        },
        {
            name: 'Calorie Tracker Lite',
            link: 'https://shielded-shelf-13633.herokuapp.com/',
            github: 'https://github.com/RubeySchulz/Health-App'
        },
    ]

    return (
        <section>
            <div className='flexrow my-2'>
                {projects.map((project, i) => (
                    <Project name={project.name} link={project.link} github={project.github} i={i}></Project>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;