import React from 'react'
import img1 from "../../img/avataaars.svg"
import { FaStar } from "react-icons/fa";
import {Helmet} from "react-helmet";

function Home() {
    return (
        <>
         <Helmet>
                <title>home</title>
            </Helmet>
        <header className='  home-content vh-100 d-flex justify-content-center align-align-items-end text-center'>
        <div className='' >
            <div className="figur mb-3"><img src={img1} alt="" className='w-75  rounded-circle'/></div>
            
            <h1 className='mb-3 text-white' >START FRAMEWORK</h1>
            <div className="home-line position-relative text-white d-inline-block ">
            <FaStar />

                      </div>
            <p className='mb-3 mt-2 text-white'>Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
        </header>
        </>
    )
}

export default Home
