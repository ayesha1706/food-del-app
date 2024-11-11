import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        
            <div className='login-popup'>
                <form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2 className='heading'>{currState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Login" ? <></> :
                            <input className="fade-input" type="text" placeholder='Your name' required />}
                        <input className="fade-input" type="email" placeholder='Your mail' required />
                        <input className="fade-input" type="password" placeholder='Your password' required />
                    </div>

                    <button className="fade-button">{currState === "Sign Up" ? "Create account" : "Login"}</button>

                    {currState === "Login" ? 
                        <p className='labl'><span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p> 
                        : 
                        <p><span onClick={() => setCurrState("Login")}>Login</span></p>}
                </form>
            </div>
        
    );
}

export default LoginPopup;
