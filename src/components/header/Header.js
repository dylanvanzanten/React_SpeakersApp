import { BrowserRouter as Router, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../logo.svg";

import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <Router>
      <header className="c-header">
        <div className="header__container">
          <div className="o-container">
            <div className="header__content">
              <Link className="header__logo" to="/">
                <Logo />
              </Link>
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default Header;
