import React from 'react';
import Navigation2 from './Navigation2';
import Footer2 from './Footer2';
import './SignUpPage.css';
import pause from '../icons/button-pause.svg';
import path_icon from '../icons/Path.svg';
import UserSingle from '../icons/UsersSingle.svg';
import firstname_icon from '../icons/user.svg';
import lastname_icon from '../icons/letters.svg';
import email_icon from '../icons/Email.svg';
import facebook from '../icons/Facebook.svg';
import twitter from '../icons/Twitter.svg';
import dribble from '../icons/dribble.svg';

const SignUpPage = () => {
    return(
        <div className='signup_page'>
        {/* Navigation */}
            <Navigation2 />
        {/* Content */}
        <div className='input_content'>
        <div class="row">
            <div class="column">
                <div className='left_col'>
                    <div className='item'>
                        <div className='item_title'>
                            <img src={path_icon} alt='' />
                            <p>Marketing</p>
                        </div>
                        <p className='description'>We've created the marketing campaign of the website. It was a very interesting collaboration.</p>
                    </div>
                    <div className='item'>
                        <div className='item_title'>
                            <img src={pause} alt='' />
                            <p>Fully Coded in HTML5</p>
                        </div>
                            <p className='description'>We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.</p>
                    </div>
                    <div className='item'>
                        <div className='item_title'>
                            <img src={UserSingle} alt='' />
                            <p>Built Audience</p>
                        </div>
                            <p className='description'>There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
                    </div>
                    
                </div>
            </div>
            <div class="column">
                <div className='register'>
                    <div className='register_header'>
                        <p id='register_title'>Register</p>
                        <div className='register_social'>
                            <button className='btn_twitter'>
                                <img src={twitter} alt='Facebook Logo'  />
                            </button>
                            <button className='btn_dribble'>
                                <img src={dribble} alt='Twitter Logo'  />
                            </button>
                            <button className='btn_facebook'>
                                <img src={facebook} alt='Google+ Logo'  />
                            </button>
                        </div>
                        <p id='reg'>or be classical</p>
                    </div>
                    
                    <div className='register_inputs'>
                    <div className='register_firstname_box'>
                        <img src={firstname_icon} alt='user icon' />
                        <input id='register_input_firstname' type='text' placeholder='First Name...' />
                    </div>
                    <div className='register_lastname_box'>
                        <img src={lastname_icon} alt='last name icon' />
                        <input id='register_input_lastname' type='text' placeholder='Last Name...' />
                    </div>
                    <div className='register_email_box'>
                        <img src={email_icon} alt='last name icon' />
                        <input id='register_input_email' type='email' placeholder='Your Email...' />
                    </div>
                    <div className='agree'>
                        <input type='checkbox' className='check'/>
                        <p>I agree to the terms and conditions.</p>
                    </div>
                    <button className='btn_register_get_started'>Get Started</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        {/* Footer */}
            <Footer2 />
        </div>
    )
}

export default SignUpPage;