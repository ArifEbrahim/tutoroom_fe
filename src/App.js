import './App.css';
import Home from './auth/Login';
import Signup from './auth/Signup';
import TutorList from './tutorList/TutorList';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

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
        </Switch>
      </div>
    </Router>
  );
}

// import './App.css';
// import TutorList from './TutorList/TutorList';

// function App() {
//   return (
//     <div className="App">
//       <TutorList />
//     </div>
//   );
// }

// export default App;
