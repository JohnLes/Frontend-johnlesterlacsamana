import React from 'react';
import './Section3.css';

const Section3 = () => {
    return(
        <div className='section3'>
            <div className='prompt'>
                <h1>Pick the best plan for you</h1>
                <section className='buttons_choices'>
                    <button className='button_active'>Legal Entity</button>
                    <button className='button_inactive'>Individual</button>
                </section>
            </div>
            <div className='plans'>
                <div className='plan_card1'>
                    <p className='plan_name'>Enterprise</p>
                    <section className='price'>
                        <p className='dollar'>$</p>
                        <p>59</p>
                    </section>
                    <p><b>10GB</b> Disk Space</p>
                    <hr />
                    <p><b>100GB</b> Monthly Bandwidth</p>
                    <hr />
                    <p><b>20</b> Email Accounts</p>
                    <hr />
                    <p><b>Unlimited</b> subdomains</p>
                    <button className='signup_active'>Sign Up</button>
                </div>
                <div className='plan_card2'>
                    <p className='plan_name'>Professional</p>
                    <section className='price'>
                        <p className='dollar'>$</p>
                        <p>29</p>
                    </section>
                    <p><b>5GB</b> Disk Space</p>
                    <hr />
                    <p><b>50GB</b> Monthly Bandwidth</p>
                    <hr />
                    <p><b>10</b> Email Accounts</p>
                    <hr />
                    <p><b>Unlimited</b> subdomains</p>
                    <button className='signup_inactive'>Sign Up</button>
                </div>
                <div className='plan_card1'>
                    <p className='plan_name'>Standard</p>
                    <section className='price'>
                        <p className='dollar'>$</p>
                        <p>17</p>
                    </section>
                    <p><b>2GB</b> Disk Space</p>
                    <hr />
                    <p><b>25GB</b> Monthly Bandwidth</p>
                    <hr />
                    <p><b>5</b> Email Accounts</p>
                    <hr />
                    <p><b>Unlimited</b> subdomains</p>
                    <button className='getstarted'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Section3;