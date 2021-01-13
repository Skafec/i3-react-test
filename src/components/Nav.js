import React from "react";
import "./Nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";

function App() {
  const container = React.createRef();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  const openMobileMenu = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setMobileNavOpen(false);
    }
  };

  const setUpEventListener = () => {
    document.addEventListener("mousedown", handleClickOutside);
  };

  const removeEventListener = () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

  React.useEffect(() => {
    setUpEventListener();
    return () => {
      removeEventListener();
    };
  });

  return (
    <Router>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <ul>
            <li className="navbar__link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__link">
              <Link to="/story">Our Story</Link>
            </li>
            <li className="navbar__link">
              <Link to="/#">Users</Link>
            </li>
            <li className="navbar__link">
              <Link to="/#">Resources</Link>
            </li>
          </ul>
        </nav>

        <nav className="navbar__mobile" ref={container}>
          <button onClick={openMobileMenu}>Audi Q5</button>
          {isMobileNavOpen && (
            <div className="navbar__mobile__content">
              <ul>
                <li className="navbar__link">
                  <Link to="/" onClick={openMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="navbar__link">
                  <Link to="/story" onClick={openMobileMenu}>
                    Our Story
                  </Link>
                </li>
                <li className="navbar__link">
                  <Link to="/#">Users</Link>
                </li>
                <li className="navbar__link">
                  <Link to="/#">Resources</Link>
                </li>
              </ul>
            </div>
          )}
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
