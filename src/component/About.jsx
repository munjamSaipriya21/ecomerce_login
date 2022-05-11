import React from "react";

const About = ()=>{
    return (
        <div>
            <section>
                <div className=" container">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>About page</h2>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">About us</h6>
                        </div>
                    </div>
                </div>

            </section>
            <section className=" section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">our company</h5>
                    <div className="underline"></div>
                
                    <p>In marketing, a product is an object, or system, 
                        or service made available for consumer use as of the consumer demand;
                        it is anything that can be offered to a market to satisfy the desire or need of a customer.
                    </p>
                    <p>We are maximisers. We're out on our own journeys to maximise - be the best
                        at what we choose and care about the most - whether it be our impact, voice,
                        potential, ideas, influence, well-being or more. Because when we maximise ourselves in our inclusive teams,  
                        is able to deliver the best imaginable value for our customers, stakeholders and the planet!</p>
                </div>
            </section>
            <section>
                <div className="img py-5 mb-6">
                    <img src="https://cdn.techinasia.com/wp-content/uploads/2015/10/Flipkart-journey-720x305.png" alt="logo" height="500px" width="1550px" />
                </div>
            </section>

        </div>
        
    )
}
export default About ;