import React from 'react'

function Navbar() {
    return (
        <>
            <div className="header">
                <div className="nav-bg">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-md py-3">
                        <div className="container"><a className="navbar-brand d-flex text-light align-items-center" href='/'><span className='logo'>Researchery</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navcol-2">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item"><a className="nav-link text-light active" href='/'>hello@researchery.app</a></li>
                                    <li className="nav-item"><a className="nav-link text-light" href='/'>How it works</a></li>
                                    <li className="nav-item"><a className="nav-link text-light" href='/'>Research Hub</a></li>
                                    <li className="nav-item"><a className="nav-link text-light" href='/'>Blog</a></li>
                                </ul>
                                <a className="btn btn-outline-light ms-md-2" role="button" href='login'>Login</a>
                                <a className="btn btn-primary ms-md-2" role="button" href='sign-up'>SignUp</a>
                            </div>
                        </div>
                    </nav>
                    {/* Main Headings and Search Bar */}
                    <div className="headerSec">
                        <h1 className='fw-blod text-light p-head' data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="800">Valuable insights, made affordable.</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="container mx-5" data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                    <p className='fw-bold text-light  mt-3 fs-5'>Type your research goal and get a free research outline.</p>
                                    <div className="input-group form-group">
                                        <input type="text" className="form-control" placeholder="e.g What are the market trends in the consulting industry..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="container d-flex" data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                            <div className="vl mt-5 mb-0">
                                <h1 className='text-light mx-5 '>3+</h1>
                                <p className='text-light mx-5 mt-0'>Years Of Experience</p>
                            </div>
                            <div className="vl mt-5  mb-0">
                                <h1 className='text-light mx-5 '>&gt;50%</h1>
                                <p className='text-light mx-5 mt-0'>Less Cost</p>
                            </div>
                            <div className="vl mt-5 mb-0">
                                <h1 className='text-light mx-5 '>100%</h1>
                                <p className='text-light mx-5 mt-0'>Customer Satisfaction</p>
                            </div>

                        </div>
                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default Navbar
