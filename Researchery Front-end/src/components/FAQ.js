import React from 'react'

function FAQ() {
    return (
        <>

            {/* FAQ Section */}
            <div className="container mt-5 mb-5" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
                <h1 className='text-center colorHeading fw-bold mb-5'>FAQ</h1>
                <div className="accordion mb-5" id="accordionExample" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="700">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button fw-bold colorHeading" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className='colorHeading'> How can I implement the results?</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body colorText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna nibh, lobortis non orci eu, mattis faucibus ante. Nulla feugiat faucibus arcu, eu lacinia leo ultrices in. Aliquam vel cursus arcu. Suspendisse bibendum, ipsum eu faucibus vestibulum, enim ex lobortis metus, vitae aliquam purus tortor sed magna. In euismod mi at neque efficitur, vitae faucibus tellus convallis. Aenean sagittis nisl eget nibh sodales, non tincidunt nibh ullamcorper
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button fw-bold colorHeading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className='colorHeading'> How can I implement the results?</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body colorText">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita, libero, placeat fuga cum hic voluptatem quo perspiciatis id deserunt autem dicta nulla reiciendis quasi deleniti quia voluptatibus assumenda architecto suscipit accusamus voluptatum maxime at commodi sit! Corrupti laboriosam modi doloremque, nihil dolores ipsa et obcaecati reprehenderit aliquid quae praesentium quia aliquam quo eligendi, esse, odit laudantium! Saepe, dicta accusamus eum similique nisi voluptate aperiam veniam natus dolorum itaque blanditiis, ad facilis recusandae aspernatur labore, ipsa asperiores! Non aut, recusandae rem excepturi amet incidunt praesentium, exercitationem a quae atque quasi cupiditate soluta cumque nam suscipit delectus minus impedit, tempore aspernatur.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button fw-bold colorHeading  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className='fw-bold colorHeading'>How can you afford your low pricing?</span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body colorText">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FAQ
