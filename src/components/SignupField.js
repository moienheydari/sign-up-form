import React from 'react';
import '../css/SignupField.min.css';

export default function SignupField() {
    return (
        <div className='signup-field'>
            <input
                placeholder='First Name'
            ></input>
            <input
                placeholder='Last Namee'
            ></input>
            <input
                placeholder='Email Address'
            ></input>
            <input
                placeholder='Password'
            ></input>
            <button>Claim your free trial</button>
            <span className='disclaimer'>By clicking the button, you are agreeing to our Terms and Services</span>
        </div>
    )
}