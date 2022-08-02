import React from 'react';

function Project({name, link, github, i}) {
    return (
        <div className='project'>
            <img className='project-img' src={require(`../../assets/${i}.PNG`)} alt='project'></img>
            <div className='overlay'>
                <div className='flex-row flex-end my-1 mx-1'>
                    <h3 className='mx-2 my-2 project-title'>{name}</h3>
                    <a href={github}><img src={require('../../assets/github_logo.png')} className='project-logo' alt='github'></img></a>
                </div>
                <a href={link} className=' mx-1 my-3 project-link'>Deployed Here</a>
            </div>
        </div>
    )
}

export default Project;