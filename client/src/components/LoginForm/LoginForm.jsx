import "./LoginForm.css"
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import SignupForm from '../../components/SignupForm/SignupForm'

import Auth from '../../utils/auth';


const LoginForm = (props) => {
    const [show, setShow] = useState(false)
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data: {login:{token}} } = await login({
          variables: { ...formState },
        });
        console.log("token:",data)
        Auth.login(token);
      } catch (error) {
        console.error(error);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    if(!props.show){
      return null;
  }

    return (
      <div className="signUpModal">
        <div className="modalContent">
                  <button id="closeModal" onClick={props.onClose}>❌</button>
          <div id="background">
              <article className="login-form">
                  <h1 id="loginTitle">EXPRESS yoURSELF</h1>
                  <h2 id="signinH2">Sign in:</h2>
                  <div className="form-box">
                  {data ? (<p>You're successfully signed in!</p>) : (
                      <form onSubmit={handleFormSubmit}>
                          <div>
                              <label>Username: </label>
                              <input id="username" name="email" type="text" placeholder="Enter Username"  value={formState.email}
                            onChange={handleChange}></input>
                          </div>
                          <div>
                              <label>Password: </label>
                              <input id="password" name="password" type="password" placeholder="Enter Password" value={formState.password}
                            onChange={handleChange}></input>
                          </div>
                          <div className="buttons">
                  <button id="signup-form-link" type="button" style={{ cursor: 'pointer' }} onClick={(e) => setShow(true)}>Make an Account</button> 
                  <button id="log-in" type="submit" style={{ cursor: 'pointer' }}>Login</button>
                  </div>
                        </form>
                  
                  )}{error && (<div>{error.message}</div>)}
                  </div>
                <SignupForm onClose={() => setShow(false)} show={show}/>  
                  
              </article>
          </div>
        </div>
      </div>
    )
    
}

export default LoginForm

