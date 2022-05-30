import React from 'react';
import facebook from '../../icons/Facebook.svg';
import twitter from '../../icons/Twitter.svg';
import google from '../../icons/Google+.svg';
import './Header.css';

const Header = () => {
    return(
        <div className='body'>
        <div className='header'>
        <div className='header_content'>
        <h1 className='header_text'>This is our great company</h1>
            <div className='social_buttons'>
                <button className='btn_facebook'>
                    <img src={facebook} alt='Facebook Logo'  />
                </button>
                <button className='btn_twitter'>
                    <img src={twitter} alt='Twitter Logo'  />
                </button>
                <button className='btn_google+'>
                    <img src={google} alt='Google+ Logo'  />
                </button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Header;