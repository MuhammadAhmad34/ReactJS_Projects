import React from 'react'
import card1 from './imgs/card1.png'
import card2 from './imgs/card2.png'
import card3 from './imgs/card3.png'

function ClientReviews() {
    return (
        <>
            {/* Clients Review */}
            <div className="container mt-5">
                <h1 className='colorHeading fw-bold text-center p-4'>What Our Clients Say About Us.</h1>
                <div className="row mb-lg-5">
                    <div className="col-md-4 col-sm-4 col-lg-4" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <div className="card p-3">
                            <img className='mt-4' src={card1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="card p-3">
                            <img className='mt-5' src={card3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <div className="card p-3">
                            <img src={card2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClientReviews
