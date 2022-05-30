import React, {useState} from 'react';
import firstname_icon from '../icons/user_white.svg';
import lastname_icon from '../icons/last_name.svg';
import './LoginPage.css';
import Navigation2 from './Navigation2';
import Footer2 from './Footer2';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';




const LoginPage = () => {

    async function loginUser(credentials) {
        return fetch('https://astibot.unidelc.com/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });
        if ('token' in response) {
            swal("success", response.message, "success", {
            buttons: false,
            timer: 2000,
        })
        .then((value) => {
            localStorage.setItem('token', response['token']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            window.location.href = "/";
            });
        } else {
            swal("Failed", response.message, "error");
        }
    }
    return(

    <div className='login_page'>
{/* Navigation */}
        <Navigation2 />
{/* Content */}
            <div className='input_content'>
                <div className='inputs'>
                    <div className='firstname_box'>
                        <img src={firstname_icon} alt='user icon' />
                        <input id='input_firstname' type='email' placeholder='First Name...'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='lastname_box'>
                        <img src={lastname_icon} alt='last name icon' />
                        <input id='input_lastname' type='password' placeholder='Last Name...' 
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/'>
                        <button className='btn_get_started'
                        onClick={login}
                        >Get Started</button>
                    </Link>

                    <div className='other'>
                        <section className='left'>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/signup'>
                                <p>CREATE ACCOUNT</p>
                            </Link>
                        </section>
                        <section className='right'>
                            <p>NEED HELP?</p>
                        </section>
                    </div>
                </div>
            </div>

{/* Footer */}
            <Footer2 />
        </div>
    )
}

export default LoginPage;