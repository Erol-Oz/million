import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login';
import Home from './Home';
import Sign from './Sign';

function Routering() {
  return (
    <div>
      <Router>
        <div className='routerdiv'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Switch>

            <Route exact path="/" component={Home} />

            <Route path="/sign" component={Sign} />

            <Route path="/login" component={Login} />

          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routering