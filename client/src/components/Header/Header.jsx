import React from 'react'
import './Header.css'
import Auth from '../../utils/auth'



export default function Header() {
    const logout = (event)=>{
        event.preventDefault();
        Auth.logout();
        alert("You have successfully logged out")
    }
    return (
        <div>
            <div id="headerDiv">
            <button id="profile" type="button" style={{ cursor: 'pointer' }}>Profile</button>
                <h1 id="headerH1">EXPRESS-yoURSELF</h1>  
            {Auth.loggedIn() ? (
                <button id="headerLogin" type="button" style={{ cursor: 'pointer' }} onClick={logout}>Logout</button>
            ) : (
            <button id="headerLogin" type="button" style={{ cursor: 'pointer' }} onClick={(e) =>{
                e.preventDefault();
                window.location.assign('/signIn')
            }}>Login</button>)}
            </div>
        </div>
    )
}
