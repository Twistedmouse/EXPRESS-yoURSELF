import React from 'react';
import {useQuery} from '@apollo/client'
import './ProfileBody.css'
import { QUERY_ME } from '../../utils/queries'
import  Auth  from '../../utils/auth'
// import { Redirect, useParams } from 'react-router-dom';




export default function ProfileBody() {
    
    
    
    // const { loading, data } = useQuery(QUERY_ME);
    

    if (Auth.loggedIn()) {
      
      
      // console.log(Auth.getUser())
        return (
          <div>
              <div id="landingBackground">
              <div id="circleBackground"></div>
              <div id="LandingDescription">
                  <div id="profileInfo">
                      <p>Username: {Auth.getUser().data.username}</p>
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


