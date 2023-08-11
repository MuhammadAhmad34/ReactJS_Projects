import React from 'react'

import blog_img1 from './imgs/blog_img1.png'
import blog_img2 from './imgs/blog_img2.png'

function Blog() {
    return (
        <>

            <div className="container mt-5" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                <h1 className='mt-5 mb-5 text-center fw-bold colorHeading' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">Read Our Most Recent Blog Posts.</h1>
                <div className="card rounded-start p-4 mb-3" style={{ maxWidth: "540px;" }} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={blog_img1} className="img-fluid mt-2 rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title mt-3"><a href="/" className='text-decoration-none'><span className='colorHeading fw-bold'>  The Benefits of Using Professional Research Services for Business Growth</span></a></h5>
                                <p className="card-text">Curabitur eget lectus nulla. Nullam eu risus vitae massa fringilla consectetur. Nam porttitor pharetra neque, non tempus risus aliquet eget. Sed finibus est at nulla eleifend, tincidunt tristique tellus pulvinar. Suspendisse mi lectus, dictum id egestas vitae, pretium a enim.</p>
                                <p className="card-text mt-5"><small className="text-body-secondary">Mar. 4, 2023</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card rounded-start mb-5 p-4 mb-3" style={{ maxWidth: "540px;" }} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={blog_img2} className="img-fluid mt-2 rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title mt-3"><a href="/" className='text-decoration-none'><span className='colorHeading fw-bold'>The Importance of Ethical Considerations in Research Studies</span></a></h5>
                                <p className="card-text">Curabitur eget lectus nulla. Nullam eu risus vitae massa fringilla consectetur. Nam porttitor pharetra neque, non tempus risus aliquet eget. Sed finibus est at nulla eleifend, tincidunt tristique tellus pulvinar. Suspendisse mi lectus, dictum id egestas vitae, pretium a enim.</p>
                                <p className="card-text mt-5"><small className="text-body-secondary">Mar. 26, 2023</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog
