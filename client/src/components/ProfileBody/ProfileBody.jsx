import React from 'react';
import './ProfileBody.css'



export default function ProfileBody() {
    return (
        <div>
            <div id="landingBackground">
            <div id="circleBackground"></div>
            <div id="LandingDescription">
                <div id="profileInfo">
                <p>Username: </p>
                <button className="editProfile" type="button" style={{ cursor: 'pointer' }}>EDIT</button>
                <p>Description: </p>
                <button className="editProfile" type="button" style={{ cursor: 'pointer' }}>EDIT</button>
                </div>
               
                <button className="deleteProfile" type="button" style={{ cursor: 'pointer' }}>DELETE PROFILE</button>
            </div>
            
        </div>
        </div>
    )
}
