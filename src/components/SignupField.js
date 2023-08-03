import React, { useEffect, useState } from 'react';
import '../css/SignupField.min.css';

export default function SignupField() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [err, setError] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true
    });

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (Boolean(form.firstName)) { setError((prev) => { return { ...prev, firstName: true } }) };
        if (Boolean(form.lastName)) { setError((prev) => { return { ...prev, lastName: true } }) };
        if (Boolean(form.password)) { setError((prev) => { return { ...prev, password: true } }) };
        if (Boolean(emailRegex.test(form.email))) { setError((prev) => { return { ...prev, email: true } }) };
    }, [form]);

    let handleClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError((prev) => {
            return {
                firstName: Boolean(form.firstName),
                lastName: Boolean(form.lastName),
                password: Boolean(form.password),
                email: Boolean(emailRegex.test(form.email))
            }
        })
        setError((prev) => {
            if (Object.values(prev).every(i => { return i; })) {
                alert(JSON.stringify(form, '', 2));
            }
            return prev;
        })
    } 

    return (
        <div id='signup-field' className='signup-field'>
            <div className='inputCont'>
                <input
                    className={`${(!err.firstName) ? 'error' : ''}`}
                    value={form.firstName}
                    placeholder='First Name'
                    name='firstName'
                    type='text'
                    onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                ></input>
                <svg className={`exMark ${(!err.firstName) ? 'error' : ''}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" /></g></svg>
            </div>
            <span className={`warning ${(!err.firstName) ? 'error' : ''}`}>First Name can not be empty</span>
            <div className='inputCont'>
                <input
                    className={`${(!err.lastName) ? 'error' : ''}`}
                    value={form.lastName}
                    placeholder='Last Name'
                    name='lastName'
                    type='text'
                    onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                ></input>
                <svg className={`exMark ${(!err.lastName) ? 'error' : ''}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" /></g></svg>
            </div>
            <span className={`warning ${(!err.lastName) ? 'error' : ''}`}>Last Name can not be empty</span>
            <div className='inputCont'>
                <input
                    className={`${(!err.email) ? 'error' : ''}`}
                    value={form.email}
                    placeholder='Email Address'
                    name='email'
                    type='text'
                    onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                ></input>
                <svg className={`exMark ${(!err.email) ? 'error' : ''}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" /></g></svg>
            </div>
            <span className={`warning ${(!err.email) ? 'error' : ''}`}>Doesn't look like an email</span>
            <div className='inputCont'>
                <input
                    className={`${(!err.password) ? 'error' : ''}`}
                    value={form.password}
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                ></input>
                <svg className={`exMark ${(!err.password) ? 'error' : ''}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" /></g></svg>
            </div>
            <span className={`warning ${(!err.password) ? 'error' : ''}`}>Password can not be empty</span>
            <button onClick={handleClick}>Claim your free trial</button>
            <span className='disclaimer'>By clicking the button, you are agreeing to our <a href='#signup-field' >Terms and Services</a></span>
        </div>
    )
}