import React, {useState} from 'react'
import LoginForm from '../LoginForm/LoginForm'

import './Header.css'
import Auth from '../../utils/auth'


const Header = (props) => {
    const [show, setShow] = useState(false)

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
            <button id="headerLogin" type="button" style={{ cursor: 'pointer' }} onClick={(e) => setShow(true)}>Login</button>)}
            </div>
             <LoginForm onClose={() => setShow(false)} show={show}/>
           
        </div>
    )
}


export default Header
    

