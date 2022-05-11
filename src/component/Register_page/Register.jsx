import React from "react";
import "./Register.css"

const Register =()=>{
    return (
        <div>
            <div className = "regform">
                <h1>Regestration Form</h1>
            </div>
            <div className = "main">
            <form>
                <div id="name">
                    <h2 className = "name">Name</h2>
                    <input className = "firstname" type="text" name="first_name"/>
                    <br/>
                    <label className = "firstlabel">first name</label>
                    <input className = "lastname" type="text" name="last_name"/>
                    <label className = "lastlabel">last name</label>

                </div>

                <h2 className = "name">Email</h2>
                <input className = "email" type="text" name="email"/>
                <label className = "email-code">Email</label>
                <h2 className = "name">Phone</h2>
                <input className = "code" type="text" name="area_code"/>
                <label className = "pin-code">Pin Code</label>
                <input className = "number" type="text" name="phone"/>
                <label className = "phone-number">phone Number</label>

                <button type="submit">Register</button>
            </form>
            </div>
        </div>
    
    )
}
export default Register;