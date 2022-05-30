import React from 'react';
import menu from '../icons/menu.svg';
import home from '../icons/home.svg';
import about from '../icons/paper.svg';
import contact from '../icons/contact.svg';
import Dropdown from '../icons/Dropdown.svg';
import './Navigation2.css';

const Navigation2 = () => {
    return(
        <div className='nav'>
            <div className='left_menu'>
                <span className='asticon_menu'>
                    <img src={menu} alt='Hamburger Menu' className='menu' />
                    <p>NOW UI KIT PRO</p>
                </span>
            </div>
            <div className='right_menu'>  
                <span className='other_menus'>               
                    <span className='components'>
                        <img src={home} alt='Components Menu'/>
                        <p>COMPONENTS</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd'/>
                    </span>                        
                    <span className='sections'>
                        <img src={about} alt='Sections Menu' />
                        <p>SECTIONS</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd' />
                    </span>
                    <span className='examples'>
                        <img src={contact} alt='examples menu' />
                        <p>EXAMPLES</p>
                        <img src={Dropdown} alt='Dropdown menu' id='dd' />
                    </span>
                </span>
                <button className='login_button'>BUY NOW</button>                        
            </div> 
        </div>
    )
}

export default Navigation2;