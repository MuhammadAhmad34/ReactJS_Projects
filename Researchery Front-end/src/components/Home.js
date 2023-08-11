import { React } from 'react'

function Home() {

    return (
        <>
            <div className="container mt-5 p-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                <h1 className='fw-bold text-center m-100 colorText'>Answers that drive you forward.</h1>
                <h4 className='fw-bold text-center mt-4 colorText'>The answer to all of your research needs!</h4>
                <p className='mt-5 fw-medium colorText'>Researchery will provide you with <span className='fw-bold'>the solutions you desire</span>, whether you are an aspiring business owner, an entrepreneur or curious about current trends.</p>
                <p className='mt-4 fw-medium colorText'>In order to supply you with <span className='fw-bold'>accurate</span>, <span className='fw-bold'>relevant</span> and the <span className='fw-bold'>latest intel</span> on any topic that piques your interest, our team of expert researchers will collect well-grounded data from our every available sources.</p>
                <p className='mt-4 fw-medium colorText'>With Researchery, you can say goodbye to hours of hard research and hello to <span className='fw-bold'>rapid, valuable answers</span> so you can focus more on the things that truly matter Just type your question into the search bar above and get valuable insights, made affordable.</p>
            </div>
            {/* Cards */}
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <div className=" p-3">
                            <div className="box mb-3 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className='mt-4' width="61" height="60" viewBox="0 0 61 60" fill="none">
                                    <path d="M18.525 37.5L7.15001 17.85C6.65952 17.0022 6.42884 16.029 6.48661 15.0512C6.54439 14.0734 6.88808 13.1342 7.47501 12.35L11.5 7C11.9657 6.37902 12.5697 5.875 13.2639 5.52786C13.9582 5.18073 14.7238 5 15.5 5H45.5C46.2762 5 47.0418 5.18073 47.7361 5.52786C48.4304 5.875 49.0343 6.37902 49.5 7L53.5 12.35C54.0908 13.1316 54.439 14.0696 54.5012 15.0474C54.5634 16.0252 54.337 16.9998 53.85 17.85L42.475 37.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28 30L13.3 5.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M33 30L47.7 5.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.5 17.5H40.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.5 55C37.4036 55 43 49.4036 43 42.5C43 35.5964 37.4036 30 30.5 30C23.5964 30 18 35.5964 18 42.5C18 49.4036 23.5964 55 30.5 55Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.5 45V40H29.25" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className=" mt-4 text-center colorHeading fw-bold ">
                                First-Rate Experts
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                Our hand-selected experts boast more than 3 years of experience.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        <div className=" p-3">
                            <div className="box mb-3 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className='mt-4' width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M25 5H35" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30 35L37.5 27.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30 55C41.0457 55 50 46.0457 50 35C50 23.9543 41.0457 15 30 15C18.9543 15 10 23.9543 10 35C10 46.0457 18.9543 55 30 55Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="colorHeading fw-bold mt-4 text-center">
                                Quick Delivery Time
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                Receive your personalised insights in days, not weeks.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className=" p-3">
                            <div className="box mb-3 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className='mt-4' width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M47.5 12.5C43.75 12.5 40.5 16 40 17.5C31.25 13.75 12.5 16.75 12.5 30C12.5 34.5 12.5 37.5 17.5 41.25V50H27.5V45H35V50H45V40C47.5 38.75 49.25 37.5 50 35H55V25H50C50 22.5 48.75 21.25 47.5 20V12.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 22.5V25C5 27.75 7.25 30 10 30H12.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="colorHeading fw-bold mt-4 text-center">
                                Unparalleled Value
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                Competitors charge $200 per hour. We‘ll do a better job for $30 per hour.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="700">
                        <div className="p-3">
                            <div className="box  mb-3 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className='mt-4' width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M52.5 37.5C52.5 38.8261 51.9732 40.0979 51.0355 41.0355C50.0979 41.9732 48.8261 42.5 47.5 42.5H17.5L7.5 52.5V12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5H47.5C48.8261 7.5 50.0979 8.02678 51.0355 8.96447C51.9732 9.90215 52.5 11.1739 52.5 12.5V37.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="colorHeading fw-bold mt-4 text-center">
                                1-on-1 Service
                            </div>
                            <div className="card-text colorText mt-2 text-center">
                                We ensure real time follow up and 1-on-1 follow up support.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="container mt-5 mb-5">
                <h1 className='text-center colorDisable'>
                    How It Works
                </h1>
                <div className="mt-5 container ">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="circle-gap">
                                <div className="circle text-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                        <path d="M36.875 4.91663H22.125C20.7673 4.91663 19.6667 6.01726 19.6667 7.37496V12.2916C19.6667 13.6493 20.7673 14.75 22.125 14.75H36.875C38.2327 14.75 39.3334 13.6493 39.3334 12.2916V7.37496C39.3334 6.01726 38.2327 4.91663 36.875 4.91663Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M39.3333 9.83337H44.25C45.554 9.83337 46.8045 10.3514 47.7266 11.2734C48.6486 12.1955 49.1666 13.4461 49.1666 14.75V49.1667C49.1666 50.4707 48.6486 51.7213 47.7266 52.6433C46.8045 53.5654 45.554 54.0834 44.25 54.0834H14.75C13.446 54.0834 12.1954 53.5654 11.2734 52.6433C10.3513 51.7213 9.83331 50.4707 9.83331 49.1667V14.75C9.83331 13.4461 10.3513 12.1955 11.2734 11.2734C12.1954 10.3514 13.446 9.83337 14.75 9.83337H19.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.125 29.5V27.0416H36.875V29.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.0417 41.7916H31.9584" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.5 27.0416V41.7916" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="circle text-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none">
                                        <path d="M9.5 43.3334H24.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 52.5H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24.7237 33.3333C25.1737 30.8153 26.3486 28.8625 28.2485 26.9097C29.4556 25.7676 30.4138 24.3758 31.0601 22.8258C31.7064 21.2758 32.0262 19.6028 31.9983 17.9167C31.9983 13.8279 30.4181 9.90662 27.6052 7.01544C24.7923 4.12425 20.9772 2.5 16.9992 2.5C13.0211 2.5 9.20604 4.12425 6.39315 7.01544C3.58027 9.90662 2 13.8279 2 17.9167C2 20.4861 2.57497 23.6465 5.74979 26.9097C7.55982 28.6109 8.79463 30.8612 9.27459 33.3333" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="circle text-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="60" viewBox="0 0 59 60" fill="none">
                                        <path d="M9.83331 33.75V10C9.83331 8.67392 10.3513 7.40215 11.2734 6.46447C12.1954 5.52678 13.446 5 14.75 5H35.6458L49.1666 18.75V50C49.1666 51.3261 48.6486 52.5978 47.7266 53.5355C46.8045 54.4732 45.554 55 44.25 55H30.7291" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M34.4167 5V20H49.1667" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25.6158 31.5249C26.0952 31.0374 26.6644 30.6507 27.2907 30.3868C27.9171 30.123 28.5885 29.9872 29.2664 29.9872C29.9444 29.9872 30.6158 30.123 31.2421 30.3868C31.8685 30.6507 32.4377 31.0374 32.9171 31.5249C33.3965 32.0125 33.7768 32.5913 34.0362 33.2283C34.2957 33.8653 34.4292 34.548 34.4292 35.2375C34.4292 35.9269 34.2957 36.6096 34.0362 37.2466C33.7768 37.8836 33.3965 38.4624 32.9171 38.9499L19.5437 52.4999L9.83331 54.9999L12.2671 45.1249L25.6158 31.5249Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="circle text-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="61" viewBox="0 0 59 61" fill="none">
                                        <path d="M14.75 32.6428C15.9137 32.6428 16.8571 31.6834 16.8571 30.4999C16.8571 29.3164 15.9137 28.3571 14.75 28.3571C13.5862 28.3571 12.6428 29.3164 12.6428 30.4999C12.6428 31.6834 13.5862 32.6428 14.75 32.6428Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28.4464 32.6428C29.6101 32.6428 30.5535 31.6834 30.5535 30.4999C30.5535 29.3164 29.6101 28.3571 28.4464 28.3571C27.2826 28.3571 26.3392 29.3164 26.3392 30.4999C26.3392 31.6834 27.2826 32.6428 28.4464 32.6428Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42.1428 32.6428C43.3066 32.6428 44.25 31.6834 44.25 30.4999C44.25 29.3164 43.3066 28.3571 42.1428 28.3571C40.9791 28.3571 40.0357 29.3164 40.0357 30.4999C40.0357 31.6834 40.9791 32.6428 42.1428 32.6428Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.5 2.64283C24.545 2.6444 19.6832 4.01271 15.4324 6.60203C11.1817 9.19134 7.70115 12.9047 5.36154 17.3466C3.02192 21.7885 1.91086 26.7925 2.14669 31.8258C2.38251 36.859 3.95639 41.733 6.70069 45.9285L2.10712 58.3571L17.4893 55.5285C21.1932 57.3692 25.258 58.336 29.3805 58.3568C33.503 58.3775 37.577 57.4518 41.2987 55.6485C45.0204 53.8452 48.2939 51.2108 50.8751 47.9419C53.4563 44.6729 55.2787 40.8536 56.2064 36.7687C57.1341 32.6838 57.1432 28.4386 56.233 24.3497C55.3229 20.2607 53.5169 16.4333 50.9497 13.153C48.3825 9.87259 45.1204 7.22378 41.4064 5.40398C37.6925 3.58419 33.6225 2.64035 29.5 2.64283Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className='flex-colmun mt-5' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                <h5 className=' fs-3 fw-bold colorHeading'>1. Answer The Questionnaire</h5>
                                <div className='fs-6'>We will guide you through a cost-free, quick questionnaire in order to assess how we can best assist you with our research expertise.</div>
                            </div>
                            <div className='flex-colmun mt-5' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                <h5 className='fs-3 fw-bold colorHeading'>2. Receive Your Personal Offer</h5>
                                <div className='fs-6'>We will review your answers carefully and get back to you within 24 hours, with your own, personalised offer covering delivery time and price.</div>
                            </div>
                            <div className='flex-colmun mt-5' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                <h5 className=' fs-3 fw-bold colorHeading'>3. Get Your Customised Report</h5>
                                <div className='fs-6'>Lean back or tend to what matters to you as we do the work for you. We will notify you once your report is ready.</div>
                            </div>
                            <div className='flex-colmun mt-5' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                                <h5 className=' fs-3 fw-bold colorHeading'>4. Talk To Your Personal Expert</h5>
                                <div className='fs-6 '>We will assist you. Personally. Based on your questionnaire, we will assign you the best-fitting expert to get back to you whenever you have questions regarding the report or our services</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Home
