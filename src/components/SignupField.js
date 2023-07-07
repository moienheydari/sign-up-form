import React, { useState } from 'react';
import '../css/SignupField.min.css';

export default function SignupField() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    let handleClick = () => {
        alert (JSON.stringify(form, '', 2));
    }

    return (
        <div className='signup-field'>
            <input
                value={form.firstName}
                placeholder='First Name'
                name='firstName'
                type='text'
                onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
            ></input>
            <span className='warning'>First Name can not be empty</span>
            <input
                value={form.lastName}
                placeholder='Last Name'
                name='lastName'
                type='text'
                onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
            ></input>
            <span className='warning'>Last Name can not be empty</span>
            <input
                value={form.email}
                placeholder='Email Address'
                name='email'
                type='text'
                onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
            ></input>
            <span className='warning'>Doesn't look like an email</span>
            <input
                value={form.password}
                placeholder='Password'
                name='password'
                type='password'
                onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
            ></input>
            <span className='warning'>Password can not be empty</span>
            <button onClick={handleClick}>Claim your free trial</button>
            <span className='disclaimer'>By clicking the button, you are agreeing to our <a>Terms and Services</a></span>
        </div>
    )
}