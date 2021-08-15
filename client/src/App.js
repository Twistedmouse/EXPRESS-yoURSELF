import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// ASK IF NEED FOR MY APP------v
// // Construct request middleware that will attach the JWT token to every request as an authorization header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });
//---------------------------------------------------------------------

const client = new ApolloClient({
  // Set up our client to execute the authLink middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signIn">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/Profile">
            <ProfilePage />
          </Route>
        </Switch>

        <div className="App"></div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
