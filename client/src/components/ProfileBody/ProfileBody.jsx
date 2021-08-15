import React from 'react';
import {useQuery} from '@apollo/client'
import './ProfileBody.css'
import { QUERY_ME } from '../../utils/queries'



export default function ProfileBody() {
    const { loading, error, data } = useQuery(QUERY_ME, { errorPolicy: 'all' });
    console.log(data)
    if (loading) {return <div>Loading...</div>}
    if (error) {console.log("Error retrieving user data",error.message)}
    if (!data.user){console.log("Me user cannot be found", data.user)}
    else if (data.user){
        
      
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

}
