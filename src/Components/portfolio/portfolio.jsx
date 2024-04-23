import React from 'react'
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import { FaStar } from "react-icons/fa";
import {Helmet} from "react-helmet";


function Portfolio() {
  
    return (
        <>
         <Helmet>
                <title>portfolio</title>
            </Helmet>
    <section className='portfolio py-5 text-center'>
      
      <h2 className='fw-bolder mb-5 '>PORTFOLIO COMPONENT</h2>
      <div className="port-header position-relative text-black d-inline-block mb-3">
        <FaStar/>
            </div>
        
        <div className="container">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img1} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img1} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img2} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img2} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img3} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img3} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img1} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img1} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img2} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img2} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item position-relative">
                    <img src={img3} alt="" className='w-100  rounded-3'/>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className="plus rounded-3"><i className='fa-solid fa-plus'></i></div>
                    </div>
                    <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
       
        <div className="modal-body  ">
        <img src={img3} alt="" className='w-100 ' />
        </div>
      
      </div>
    </div>
  </div>                   
                </div>
            </div>
        </div>
       
    </section>
        </>
    )
}

export default Portfolio
