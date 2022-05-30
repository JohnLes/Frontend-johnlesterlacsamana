import React from 'react'
import './Footer2.css';


const Footer2 = () => {
    return(
        <div className='login_footer'>
            <div className='login_footer_left'>
                <div className='login_footer_options'>
                    <p>CREATIVE TIM</p>
                    <p>ABOUT US</p>
                    <p>BLOG</p>
                </div>
            </div>
            <div className='login_footer_right'>
                <div className='copyrights'>
                    <p>© 2022, Designed by</p>
                    <p id='company_name'> Invision</p>
                    <p>. Coded by</p>
                    <p id='company_name'> Creative Tim</p>
                    <p>.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer2;