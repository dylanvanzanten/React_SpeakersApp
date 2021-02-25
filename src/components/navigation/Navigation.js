import { Link } from "react-router-dom";

function Navigation() {
  return (
      <nav className="c-navigation">
        <div className="container">
          <div className="navigation__column">
            <ul className="navigation__list">
              <li>
                <Link className="navigation__list-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="navigation__list-item">
                  Speakers
                </Link>
              </li>
			  <li>
                <Link to="/about" className="navigation__list-item">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;
