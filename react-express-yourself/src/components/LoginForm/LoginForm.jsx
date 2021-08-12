import React from 'react'
import "./LoginForm.css"

export default function LoginForm() {
    return (
        <div id="background">
            <article className="login-form">
                <h1 id="loginTitle">EXPRESS yoURSELF</h1>
                <h2 id="signinH2">Sign in:</h2>
                <div className="form-box">
                <form >
                <div>
                    <label>Username: </label>
                    <input id="username" type="text" placeholder="Enter Username"></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input id="password" type="password" placeholder="Enter Password"></input>
                </div>
            </form>
            <div className="buttons">
            <button id="signup-form-link" type="button">Make an Account</button> 
            <button id="log-in" type="button">Login</button>
            </div>
                </div>
            </article>
        </div>
    )
}

