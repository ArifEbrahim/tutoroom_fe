import './App.css';
import Navigation from './Nav/Navigation'
import Home from './auth/Login';
import Signup from './auth/Signup';
import TutorList from './TutorList/TutorList';
import Profile from './Profile/MyProfile'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TutorProfile from './Profile/TutorProfile'

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/search">
            <TutorList />
          </Route>
          <Route exact path="/search/:id">
            <TutorProfile />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
