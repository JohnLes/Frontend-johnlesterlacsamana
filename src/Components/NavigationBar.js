import React from 'react';
import './NavigationBar.css';
import menu from '../icons/menu.svg';
import home from '../icons/home.svg';
import about from '../icons/paper.svg';
import contact from '../icons/contact.svg';
import Dropdown from '../icons/Dropdown.svg';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div className='nav'>
            <div className='left_menu'>
                <span className='asticon_menu'>
                    <img src={menu} alt='Hamburger Menu' className='menu' />
                    <p>Asticom</p>
                </span>
            </div>
            <div className='right_menu'>  
                <span className='other_menus'>  
                <Link style={{textDecoration: 'none', color: 'white'}} to='/'>                                    
                    <span className='home'>
                        <img src={home} alt='Home Menu'/>
                        <p>Home</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd'/>
                    </span>
                </Link>
                    <span className='about'>
                        <img src={about} alt='About Menu' />
                        <p>About</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd' />
                    </span>
                    
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/contactus'>                       
                    <span className='contact'>
                        <img src={contact} alt='contact menu' />
                        <p>Contact</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd' />
                    </span>
                    </Link>
                </span>
                <Link to='/login'>
                    <button className='login_button'>Log in</button>                        
                </Link>
            </div> 
        </div>
        
    )
}

export default NavigationBar;