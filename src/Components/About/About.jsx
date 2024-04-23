import React from 'react'
import { FaStar } from "react-icons/fa";
import {Helmet} from "react-helmet";

function About() {
    return (
        <>
         <Helmet>
                <title>about</title>
            </Helmet>
        <section className='about-content vh-100 d-flex justify-content-center align-items-center text-center text-white'>
        <div>
            <div>
        <h1>ABOUT COMPONENT</h1>
        <div className="about-header position-relative text-white d-inline-block">
        <FaStar/>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 mt-2">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default About
