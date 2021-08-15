import React from 'react'
import "./LandingPageBody.css"

export default function LandingPageBody() {
    return (
        <div id="landingBackground">
            <div id="circleBackground"></div>
            <div id="LandingDescription">
                <p>EXPRESS-yoURSELF by Beta-Face is a machine learning application where you can receive data from a webcam of the emotions your user is displaying on a particular timestamps. EXPRESS-yoURSELF is here for accurate information about what the user thinks about your product and at what time, this information will then be displayed onto a graph. click the button below to begin.</p>
                <button id="startButton" type="button" style={{ cursor: 'pointer' }} onClick={(e) =>{
                e.preventDefault();
                window.location.assign('/Facemesh')
            }}>BEGIN!</button>
            </div>
            
        </div>
    )
}

