import React from 'react';
import './Section4.css';
import user_icon from '../../icons/user.svg';
import email_icon from '../../icons/Email.svg';

const Section4 = () => {
    return(
        <div className='section4'>
            <div className='section4_container'>
                <div className='section4_header'>
                    <h1>Want to work with us?</h1>
                    <p>Your project is very important to us</p>
                </div>
                <div className='inputs'>
                    <div className='name_box'>
                        <img src={user_icon} alt='user icon' />
                        <input id='input_name' type='text' placeholder='First Name...' />
                    </div>
                    <div className='email_box'>
                        <img src={email_icon} alt='email icon' />
                        <input id='input_email' type='email' placeholder='Email Here...' />
                    </div>
                    <textarea type='text' placeholder='Type a message...' />
                    <line />
                </div>
                <button className='btn_send_message'>Send Message</button>
            </div>
        </div>
    )
}

export default Section4;