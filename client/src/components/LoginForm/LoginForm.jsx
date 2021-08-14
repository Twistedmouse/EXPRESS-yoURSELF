import "./LoginForm.css"
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LoginForm = (props) => {
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
        const { data:{login:{token}} } = await login({
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

    return (
        <div id="background">
            <article className="login-form">
                <h1 id="loginTitle">EXPRESS yoURSELF</h1>
                <h2 id="signinH2">Sign in:</h2>
                {data ? (<p>You're successfully signed in!</p>) : (
                <div className="form-box">
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
                <button id="signup-form-link" type="button" style={{ cursor: 'pointer' }}>Make an Account</button> 
                <button id="log-in" type="submit" style={{ cursor: 'pointer' }}>Login</button>
                </div>
                      </form>
                
                </div>
                  )}{error && (<div>{error.message}</div>)}
                
                
            </article>
        </div>
    )
    
}

export default LoginForm

