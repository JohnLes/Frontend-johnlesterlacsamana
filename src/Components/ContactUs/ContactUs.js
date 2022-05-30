import React from 'react';
import './ContactUs.css';
import NavigationBar from '../NavigationBar';
import ContactUs_Header from './ContactUs_Header';
import ContactUs_Section1 from './ContactUs_Section1';
import ContactUs_Section2 from './ContactUs_Section2';
import Footer from '../Footer';

const ContactUs = () => {
    return(
        <div className='contactus'>
            <NavigationBar />
            <ContactUs_Header />
            <ContactUs_Section1 />
            <ContactUs_Section2 />
            <Footer />
        </div>
    )
}

export default ContactUs;