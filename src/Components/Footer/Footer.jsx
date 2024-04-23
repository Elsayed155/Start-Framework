import React from 'react'
function Footer() {
    return (
        <>
        <footer className=' pt-lg-5  fw-light text-white'>
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="loc-info text-center">
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="web text-center">
                        <h2>AROUND THE WEB</h2>
                        <div className='web-icon my-4 d-flex justify-content-center align-items-center'>
                            <div className="icon me-2"><i class="fa-brands fa-facebook fa-lg"></i></div>
                            <div className="icon me-2"><i class="fa-brands fa-twitter fa-lg "></i></div>
                            <div className="icon me-2"> <i class="fa-brands fa-linkedin-in fa-lg "></i></div>
                            <div className="icon me-2"><i class="fa-solid fa-globe fa-lg"></i></div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="freelanc text-center">
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right text-center py-3">
            <p>Copyright © Your Website 2021</p>
        </div>
        </footer>
        </>
    )
}

export default Footer
