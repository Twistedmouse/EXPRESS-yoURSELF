import React from 'react'
import './Header.css'
import { BrowserRouter as Link } from 'react-router-dom'
import singIn from '../LoginForm/LoginForm'


export default function Header() {
    return (
        <div>
            <div id="headerDiv">
            <button id="profile" type="button">Profile</button>
                <h1 id="headerH1">EXPRESS-yoURSELF</h1>  
            <button id="headerLogin" type="button" onClick={(e) =>{
                e.preventDefault();
                window.location.assign('/signIn')
            }}>Login</button>
            </div>
        </div>
    )
}
