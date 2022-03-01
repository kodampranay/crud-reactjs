import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <>
    <div className="container">
        <div className="row mt-5 ">
            <div className="col-md-10 m-auto p-5 text-center">
                <div className="card shadow-lg p-5">
                        <h1 className='display-1'>404</h1>
                        <h1 className='text-danger'>Page Not Found</h1>
                        <Link to='/' className='btn submit-btn my-3 mx-auto p-2'>HOME</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
