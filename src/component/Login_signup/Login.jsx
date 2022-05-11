import React from "react";
import "./Login.css";

const Login =() =>{
    return(
        <div className = "main-div">
        <div className = "box">
            <h1>Login</h1>
            <form  >
                <div className = "inputBox">
                    <input type="text" name="username" autoComplete="off" required/>
                    <label htmlFor = "username">User Name</label>
                </div>

                <div className = "inputBox">
                    <input type="password" name="password" autoComplete="off" required/>
                    <label htmlFor = "password">password</label>
                </div>
                <input type="submit" name="" value="login"/>
            </form>
        </div>
    </div>
    )
}
export default Login;