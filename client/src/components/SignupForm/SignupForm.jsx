import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import './SignupForm.css'
const SignupForm = () => {
  const [formState, setFormState] = useState({
    name: '',
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


  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
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
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                    />
                      </div>
                        
                        
                        <label>Email: </label>
                            <input className="form-input"
                            
                            placeholder="Enter email..."
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            />
                        <label>Password: </label>
                            <input className="form-input"
                            
                            placeholder="Enter password..."
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                                    <button
                                    className="buttons"
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
      </div>
    </main>
  );
};


export default SignupForm