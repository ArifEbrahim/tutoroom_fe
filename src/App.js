import './App.css';
import Navigation from './Nav/Navigation'
import Home from './Home/Home';
import Login from './auth/Login'
import Signup from './auth/Signup';
import TutorList from './TutorList/TutorList';
import Profile from './Profile/MyProfile'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TutorProfile from './Profile/TutorProfile'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <div>
            <Navigation />
            <Route exact path='/search' component={TutorList} />
            <Route exact path='/search/:id' component={TutorProfile} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
