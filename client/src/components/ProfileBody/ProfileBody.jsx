import React from "react";
import { useQuery } from "@apollo/client";
import "../darkGrayTheme.css";
import { QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useParams } from "react-router-dom";

export default function ProfileBody() {
  const { username } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: username },
  });
  const user = data?.me || {};

  if (loading) {
    return <p id="login">Loading...</p>;
  }

  if (!Auth.loggedIn()) {
    return (
      <div id="circleBackground">
        <p id="login">
          <br></br>
          <br></br>YOU MUST BE LOGGED IN TO VIEW PROFILE.
        </p>
      </div>
    );
  }

  // console.log(user.username);
  if (Auth.loggedIn()) {
    // console.log(Auth.getUser())
    return (
      <div>
        <div id="landingBackground">
          <p id="comingSoon">
            SAVED CHARTS COMING SOON COME BACK LATER FOR PROFILE SECTION, NOT
            AVAILABLE IN DEMO APP!
          </p>
          <div id="InfoDescription">
            <div id="profileInfo">
              <p>Username: {Auth.getUser().data.username}</p>
              <button
                className="editProfile"
                type="button"
                style={{ cursor: "pointer" }}
              >
                EDIT
              </button>
              <p>Description: {Auth.getUser().data.description}</p>
              <button
                className="editProfile"
                type="button"
                style={{ cursor: "pointer" }}
              >
                EDIT
              </button>
              <p id="chartsComing">Charts coming soon!!</p>
            </div>

            <button
              className="deleteProfile"
              type="button"
              style={{ cursor: "pointer" }}
            >
              DELETE PROFILE
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    <p>You must be logged in to view! </p>;
  }
}
