import React from 'react'
import { FaStar } from "react-icons/fa";
import {Helmet} from "react-helmet";

function Contact() {
    return (
        <>
         <Helmet>
                <title>contact</title>
            </Helmet>
        <section className='contact text-center'>
            <h1 className='fw-bolder text-center mt-2 '>CONTACT SECTION</h1>
            <div className="contact-header position-relative text-black d-inline-block mb-5">
        <FaStar/>
            </div>
            <div className="w-50 m-auto">
                <form action="">
                    <input type="text" placeholder='User Name'
                    className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' />
                    <input type="number" placeholder='User Age'
                    className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' />
                    <input type="email" placeholder='User Email'
                    className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' />
                    <input type="password" placeholder='User Password'
                    className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5' />
                    <button className='btn-send btn mb-5'>Send Message</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Contact
