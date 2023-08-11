import React from 'react'
import search from './imgs/search.svg'
import graph from './imgs/graph.svg'
import tick from './imgs/tick.svg'
import chart from './imgs/chart.jpg'
import DB_icon from './imgs/Database.svg'

function Services() {
    return (
        <>
            {/* Services */}
            <div className="container mt-5 mb-5">
                <h1 className='text-center colorHeading fw-bold first mb-lg-5'>Our Services</h1>
                <div className="row ">
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <div className=" p-3">
                            <div className="box mb-3 text-center">
                                <img className='mt-4 img' src={search} alt="" />
                            </div>
                            <div className=" mt-2 mb-2 text-center colorHeading fw-bold ">
                                Research
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                <div className='mt-2'>Market Size</div>
                                <div className='mt-2'>Total Addressable Market</div>
                                <div className='mt-2'>Industry Trends</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className=" p-3">
                            <div className="box mb-3 text-center">
                                <img className='mt-0 img' src={graph} alt="" />
                            </div>
                            <div className="colorHeading mb-2 fw-bold mt-3 text-center">
                                Analysis
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                <div className='mt-2'>Competitors</div>
                                <div className='mt-2'>Target Group</div>
                                <div className='mt-2'>SWOT</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <div className=" p-3">
                            <div className="box  mb-3 text-center">
                                <img className='mt-4 img' src={tick} alt="" />
                            </div>
                            <div className="colorHeading mb-2 fw-bold mt-3 text-center">
                                Validation
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                <div className="mt-2">Business ideas</div>
                                <div className="mt-2">Hypothesis</div>
                                <div className="mt-2">Case studies</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <div className=" p-3">
                            <div className="box mb-3">
                                <img className='mt-0 img' src={DB_icon} alt="" />
                            </div>
                            <div className="colorHeading mb-2 fw-bold mt-3 text-center">
                                Data creation
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                <div className="mt-2">Surveys</div>
                                <div className="mt-2">High Quality Leads</div>
                                <div className="mt-2">Data Entry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8 col-sm-8 col-lg-8" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <h2 className='colorHeading mt-5 fw-bold'>
                            Insights You Need, At a Price You Will Love.
                        </h2>
                        <p className='mt-5 colorText'>
                            We store our research reports and insights in our own digital library. Perhaps we have already commenced some research in your industry or the branch you are looking for. Dive into our Research Hub and discover the insights you desire, at a price you will love.
                        </p>

                        <div className="d-flex mt-5 mb-5">
                            <div className="card p-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className="car-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                        <rect opacity="0.2" x="0.882019" y="0.5" width="51" height="51" rx="9.5" fill="#3366FF" stroke="#103472" />
                                        <path d="M15.382 28.3353V15.667C15.382 14.9597 15.663 14.2813 16.1632 13.7811C16.6633 13.281 17.3417 13 18.049 13H29.3838L36.718 20.3343V37.003C36.718 37.7103 36.437 38.3887 35.9369 38.8889C35.4367 39.389 34.7584 39.67 34.051 39.67H26.7168" stroke="#103472" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28.717 13V21.001H36.718" stroke="#103472" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.9431 27.1484C24.2031 26.8883 24.5119 26.682 24.8516 26.5413C25.1914 26.4006 25.5556 26.3281 25.9233 26.3281C26.2911 26.3281 26.6553 26.4006 26.995 26.5413C27.3348 26.682 27.6435 26.8883 27.9036 27.1484C28.1636 27.4084 28.3699 27.7171 28.5107 28.0569C28.6514 28.3967 28.7238 28.7609 28.7238 29.1286C28.7238 29.4964 28.6514 29.8605 28.5107 30.2003C28.3699 30.5401 28.1636 30.8488 27.9036 31.1089L20.6493 38.3364L15.382 39.6699L16.7022 34.4026L23.9431 27.1484Z" stroke="#103472" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h4 className='colorHeading mt-4 fw-bold'>Instant reports.</h4>
                                </div>
                                <div className="card-text colorText">
                                    Find your research with no waiting time. Search, unlock and learn!
                                </div>
                            </div>
                            <div className="card mx-2 p-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="900">
                                <div className="car-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                        <rect opacity="0.2" x="0.882019" y="0.5" width="51" height="51" rx="9.5" fill="#3366FF" stroke="#103472" />
                                        <path d="M26.382 13V39.6667" stroke="#103472" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M33.0487 17H23.0487C21.811 17 20.624 17.4917 19.7489 18.3668C18.8737 19.242 18.382 20.429 18.382 21.6667C18.382 22.9043 18.8737 24.0913 19.7489 24.9665C20.624 25.8417 21.811 26.3333 23.0487 26.3333H29.7154C30.953 26.3333 32.14 26.825 33.0152 27.7002C33.8904 28.5753 34.382 29.7623 34.382 31C34.382 32.2377 33.8904 33.4247 33.0152 34.2998C32.14 35.175 30.953 35.6667 29.7154 35.6667H18.382" stroke="#103472" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h4 className="colorHeading mt-4 fw-bold">Starting at $30.</h4>
                                </div>
                                <div className="card-text colorText">
                                    Great quality reports at a lower price than anywhere. So why even bother?
                                </div>
                            </div>
                        </div>

                    </div>
                   <div className="col-md-4" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <img src={chart} alt="Chart" className='img-chart'/>
                   </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className='wide mt-5 mb-5 btn btn-primary'>Dive In Now</button>
                </div>
            </div>


        </>
    )
}

export default Services
