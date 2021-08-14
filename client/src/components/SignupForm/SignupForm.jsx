import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import './SignupForm.css'

const SignupForm = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if(!props.show){
      return null;
  }

  return (
    <main >
      <div className="signUpModal">
        <div className="modalContent">
                <button id="closeModal" onClick={props.onClose}>❌</button>
            <h1 id="signUpTitle">EXPRESS yoURSELF</h1>
                    <h2 id="signUpH2">Sign Up:</h2>
            <div >
                {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
                ) : (
                <form onSubmit={handleFormSubmit}>
                    <div className="form-box" >
                        <div className="row">
                                <label >Username: </label>
                                        <input className="form-input"
                                
                                        placeholder="Enter username..."
                                        name="username"
                                        type="text"
                                        value={formState.username}
                                        onChange={handleChange}
                                        />
                        </div>
                
                        <div className="row">
                                <label>Email: </label>
                                        <input className="form-input" id="emailInput"
                                        
                                        placeholder="Enter email..."
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        />
                        </div>

                        <div className="row">
                        <label>Password: </label>
                                    <input className="form-input"
                                    
                                    placeholder="Enter password..."
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                    />
                        </div>
                        <button
                             id="submitBtn"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                            >
                            Submit
                        </button>
                    </div>
                    
                </form>
                )}

                {error && (
                <div >
                    {error.message}
                </div>
                )}
            </div>
        </div>
        <div className="blurBackground"></div>
      </div>
      
    </main>
    
  );
  
};


export default SignupForm