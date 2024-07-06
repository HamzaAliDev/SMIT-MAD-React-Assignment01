import React, { useState } from 'react'
import Button from '../../components/Button';

export default function Login() {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <div className="container" >
                <div className="card card-size p-4">
                    <div className="card-body">
                        <h3 className="m-3">Login</h3>
                        <p className="m-3 fw-normal" >Continue your design journey with us.</p>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6 ">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="m-3 position-relative">
                            <label className="form-label fw-semibold fs-6">Password</label><button className='border-0 bg-body opacity-75 fw-light position-absolute top-0 end-0' style={{fontSize:14}}>Forgot password</button>
                            <input type="password"  id="password-field" className="form-control" />
                        </div>

                        <div className="row mb-3">
                            <label className="checkbox ms-3" >
                                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                                <div className="checkmark"></div>
                                <div className="label-text">
                                    <p className='mt-3 fs-6 opacity-75'>Remember me for 30 days</p>
                                </div>
                            </label>
                        </div>
                        <div className='row px-4'>
                           <Button text="Log in" />
                        </div>
                        <div className='row mt-3'>
                            <div className="col d-inline-flex  align-items-center justify-content-center">
                                <p className="mb-0">Don't have an account?</p><button className="border-0 fw-semibold fs-6 bg-body" style={{color:'#234050'}}>Register now</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
