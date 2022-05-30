import React from 'react';
import './ContactUs.css';
import firstname_icon from '../../icons/user.svg';
import phone_icon from '../../icons/Phone.svg';
import email_icon from '../../icons/Email.svg';
import phone_red from '../../icons/PhoneRed.svg';
import pin_icon from '../../icons/Pin.svg';
import Briefcase from '../../icons/Briefcase.svg';


const ContactUs_Section1 = () => {
    return(
        <div className='contactus_section1'>
            <div className='row'>
                <div class="column">
                    <div className='contactus_section1_message'>
                        <div className='contactus_section1_message_header'>
                            <p id='contactus_section1_title'>Send us a message</p>
                            <p id='contactus_section1_reg'>You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.</p>
                        </div>
                        
                        <div className='contactus_section1_inputs'>
                        <p>Your Name</p>
                        <div className='contactus_section1_name_box'>
                            <img src={firstname_icon} alt='user icon' />
                            <input id='contactus_section1_input_name' type='text' placeholder='Your Name...' />
                        </div>
                        <p>Email Address</p>
                        <div className='contactus_section1_email_box'>
                            <img src={email_icon} alt='email name icon' />
                            <input id='contactus_section1_input_email' type='email' placeholder='Email Here...' />
                        </div>
                        <p>Phone</p>
                        <div className='contactus_section1_number_box'>
                            <img src={phone_icon} alt='phone icon' />
                            <input id='contactus_section1_input_number' type='text' placeholder='Number Here...' />
                        </div>
                        
                        <textarea type='text' placeholder='Your message' />
                        <button className='btn_contactus_section1'>Contact Us</button>
                        </div>
                    </div>
                </div>

                <div class="column">
                <div className='right_col'>
                    <div className='contactus_section1_item'>
                        <div className='contactus_section1_item_title'>
                            <img src={pin_icon} alt='' />
                            <p>Find us at the office</p>
                        </div>
                        <p className='contactus_section1_description'>Bld Mihail Kogalniceanu, nr. 8,7652 Bucharest, Romania</p>
                        </div>
                        <div className='contactus_section1_item'>
                        <div className='contactus_section1_item_title'>
                            <img src={phone_red} alt='' />
                            <p>Give us a ring</p>
                        </div>
                            <p className='contactus_section1_description'>Michael Jordan +40 762 321 762 Mon - Fri, 8:00-22:00</p>
                        </div>
                        <div className='contactus_section1_item'>
                        <div className='contactus_section1_item_title'>
                            <img src={Briefcase} alt='' />
                            <p>Legal Information</p>
                        </div>
                            <p className='contactus_section1_description'>Asti  Ltd. VAT · EN2341241 IBAN · EN8732ENGB2300099123 Bank · PSBank</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs_Section1;