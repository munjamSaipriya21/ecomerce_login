import React from "react";

const Contact = ()=>{
    return (
        <div>
            <section>
                <div className=" container">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>Contact </h2>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Contact us</h6>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card mt-d">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact form</h6>
                                    <hr/>
                                    <div className="form-group" >
                                        <label className="mb-1">Full name</label>
                                        <input type="text"  className ="form-control" placeholder="Enter the Full name"/>

                                    </div>
                                    <div className="form-group" >
                                        <label className="mb-1">Phone number</label>
                                        <input type="text"  className ="form-control" placeholder="Enter your Phone n umber"/>

                                    </div>
                                    <div className="form-group" >
                                        <label className="mb-1">Email</label>
                                        <input type="text"  className ="form-control" placeholder="Enter your email "/>

                                    </div>
                                    <div className="form-group" >
                                        <label className="mb-1">Message me</label>
                
                                        <textarea rows="3 " className ="form-control" placeholder="Type your message" ></textarea>
                                    </div>
                                    <div className="form-group py-3" >
                                        
                                        <button type="button "  className ="btn btn-primary shadow w-100" >send message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h3 className="main-heading">Address information</h3>
                                    <div className="underline"></div>
                                    <p> 62/1 ,sarjapur, Banglore</p>
                                    <p>Phone:+91 7093317230</p>
                                    <p>Email:Sai@gmail.com</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Contact ;