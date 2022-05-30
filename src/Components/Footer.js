import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer_left'>
                <div className='footer_options'>
                    <p>HOME</p>
                    <p>ABOUT US</p>                    
                    <p>BLOG</p>
                </div>
            </div>
            <div className='footer_right'>
                <div className='copyrights'>
                    <p>© 2022, Designed by</p>
                    <p id='company_name'> Asticom</p>
                    <p>. CTG</p>
                </div>
            </div>
        </div>

    )
}

export default Footer;