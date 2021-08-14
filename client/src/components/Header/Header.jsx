import React from 'react'
import './Header.css'



export default function Header() {
    return (
        <div>
            <div id="headerDiv">
            <button id="profile" type="button" style={{ cursor: 'pointer' }}>Profile</button>
                <h1 id="headerH1">EXPRESS-yoURSELF</h1>  
            <button id="headerLogin" type="button" style={{ cursor: 'pointer' }} onClick={(e) =>{
                e.preventDefault();
                window.location.assign('/signIn')
            }}>Login</button>
            </div>
        </div>
    )
}
