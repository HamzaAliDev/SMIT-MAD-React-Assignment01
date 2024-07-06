import React from 'react'
import Button from '../../components/Button'

export default function Forget() {
  return (
    <>
      <div className="container">
        <div className="card card-size p-4">
          <div className="card-body">
            <h3 className="m-3">Forget Password</h3>
            <div className="mx-3 my-5">
              <label className="form-label fw-semibold fs-6" >Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className='row px-4 mt-5'>
              <Button text="Send" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
