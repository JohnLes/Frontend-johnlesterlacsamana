import React from 'react';
import avatar from '../../images/Avatar.png';
import quatation from '../../icons/Quote.svg';

import './Section2.css';

const Section2 = () => {
    return(
        <div className='section2'>
            <div className='section2_title'>
                <h2>What is ALPHA?</h2>
            </div>
            <div className='section2_description'>
                <p className='description_content'>If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for €850.</p>
            </div>
            
            <div className='section2_cards'>
            <div className='card1'>
                    <img src={avatar} alt='avatar' className='card_avatar' />
                    <div className='card1_content'>
                        <p className='card1_quote'>The networking at Web Summit is like no other European tech conference.</p>
                        <img src={quatation} alt='quate icon' />
                        <p id='name'>
                            Michael Elijah
                        </p>
                        <p id='social'>
                            @Michaelelijah
                        </p>
                    </div>
                </div>
                <div className='card1'>
                    <img src={avatar} alt='avatar' className='card_avatar' />
                    <div className='card1_content'>
                        <p className='card1_quote'>The connections you make at Web Summit are unparalleled, we met users all over the world.</p>
                        <img src={quatation} alt='quate icon' />
                        <p id='name'>
                            Olivia Harper
                        </p>
                        <p id='social'>
                            @Oliviaharper
                        </p>
                    </div>
                </div>
                <div className='card1'>
                    <img src={avatar} alt='avatar' className='card_avatar' />
                    <div className='card1_content'>
                        <p className='card1_quote'>Web Summit will increase your appetite, your inspiration, and your network.</p>
                        <img src={quatation} alt='quate icon' />
                        <p id='name'>
                            James Logan
                        </p>
                        <p id='social'>
                            @Jameslogan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;