import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://web.facebook.com/iamriazanwar' target='_blank'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/iamriazanwar' target='_blank'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.twitter.com/iamriazanwar' target='_blank'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Riaz Anwar</span>
                           
                            <span className="wave">👋</span> 
                        
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "Front-end Dev 😎",1000,
                                "React Dev 🌐",1000,
                                "JavaScript Dev 📱",1000,
                                "HTML & CSS Dev 💻",1000,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                           <span>Knack of building application or website with back end operations.</span> 
                           
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                    <a  href='https://www.linkedin.com/in/iamriazanwar' target='_blank'>
                        <button className='btn highlighted-btn'>
                            LinkedIn
                        </button>
                        </a>
                        <a href ='https://github.com/RiazAnwar' target='_blank'>
                            <button type="button" className='btn highlighted-btn '>
                               
                                Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;