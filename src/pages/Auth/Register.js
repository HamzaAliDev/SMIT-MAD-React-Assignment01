import React from 'react'
import Button from '../../components/Button'

export default function Register() {
    return (
        <>
            <div className="container" >
                <div className="card card-size p-4">
                    <div className="card-body">
                        <h3 className="m-3">Register</h3>
                        <p className="m-3 fw-normal">Continue your design journey with us.</p>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Full Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className='row px-4 mt-5'>
                            <Button text="Register" />
                        </div>
                        <div className='row mt-3'>
                            <div className="col d-inline-flex  align-items-center justify-content-center">
                                <p className="mb-0">Already have an account?</p><button className="border-0 fw-semibold fs-6 bg-body" style={{ color: '#234050' }}>Login</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
