import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Story from './pages/Story';

function App() {
  return (
    <Router>
        <div className="navbar-wrapper">
            <nav className="navbar">
                <ul>
                    <li className='navbar__link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navbar__link'>
                        <Link to="/story">Our Story</Link>
                    </li>
                    <li className='navbar__link'>
                        <Link to="/#">Users</Link>
                    </li>
                    <li className='navbar__link'>
                        <Link to="/#">Resources</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/story">
                    <Story />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>

  );
}

export default App;
