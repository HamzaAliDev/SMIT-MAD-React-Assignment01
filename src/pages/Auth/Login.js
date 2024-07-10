import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

const LOCAL_STORAGE_KEY = 'myProjectUsers';
let initialState = { email: "", password: ""}
export default function Login() {

const [isChecked, setIsChecked] = useState(false);
const [state, setState] = useState(initialState)
const navigate = useNavigate()

// Remove other local storage data
const removeOtherLocalStorageData = () => {
    Object.keys(localStorage).forEach(key => {
        if (!key.startsWith(LOCAL_STORAGE_KEY)) {
            localStorage.removeItem(key);
        }
    });
};
  removeOtherLocalStorageData();

const handleChange = (e) => {
      
    setState(s => ({...s,[e.target.name]: e.target.value}))        
}

const handleLogin = () => {
    let { email, password } = state;
    let storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

     // Check if user exists and password matches
     const user = storedUsers.find(user => user.email === email && user.password === password);

     if (user) {
        toast.success("Login successful!");
        setState(initialState)

        if (isChecked) {
            localStorage.setItem('rememberedUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('rememberedUser');
        }
        // Redirect to another page or perform further actions
        navigate('/frontend')
    } else {
        toast.error("Invalid email or password.");
    }


    
}

const handleRadio = (event) => {
    setIsChecked(event.target.checked);
};

    return (
        <main>
            <div className="container" >
                <div className="card card-size p-4">
                    <div className="card-body">
                        <h3 className="m-3">Login</h3>
                        <p className="m-3 fw-normal" >Continue your design journey with us.</p>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6 ">Email address</label>
                            <input type="email" className="form-control" name='email'  value={state.email} onChange={handleChange} />
                        </div>
                        <div className="m-3 position-relative">
                            <label className="form-label fw-semibold fs-6">Password</label><Link to='/forget' className='link-underline link-underline-opacity-0 fw-light position-absolute top-0 end-0' style={{fontSize:14,color:'#111'}}>Forgot password</Link>
                            <input type="password"  className="form-control" name='password'  value={state.password} onChange={handleChange}/>
                        </div>

                        <div className="row mb-3">
                            <label className="checkbox ms-3" >
                                <input type="checkbox" checked={isChecked} onChange={handleRadio} />
                                <div className="checkmark"></div>
                                <div className="label-text">
                                    <p className='mt-3 fs-6 opacity-75'>Remember me for 30 days</p>
                                </div>
                            </label>
                        </div>
                        <div className='row px-4'>
                           <Button text="Log in" onClick={handleLogin}/>
                        </div>
                        <div className='row mt-3'>
                            <div className="col d-inline-flex  align-items-center justify-content-center">
                                <p className="mb-0" >Don't have an account?</p><Link to='/register' className=" fw-semibold fs-6 link-underline link-underline-opacity-0 link-underline-opacity-75-hover" style={{color:'#234050'}}>Register now</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}
