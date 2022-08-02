import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='flex-row flex-center'>
                <a href="https://www.linkedin.com/in/connor-schulz-937a4a22b/"><img src={require('../../assets/linkedin-logo.png')} className='footer-img' alt='logo'></img></a>
                <a href="https://github.com/RubeySchulz"><img src={require('../../assets/github_logo.png')} className='footer-img' alt='logo'></img></a>
                <a href="https://twitter.com/rubemecia"><img src={require('../../assets/twitter-logo.png')} className='footer-img' alt='logo'></img></a>    
            </div>
        </footer>
    )
}

export default Footer;