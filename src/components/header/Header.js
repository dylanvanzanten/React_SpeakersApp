import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../logo.svg";
import Navigation from "../navigation/Navigation";
import Button from "../base/Button";

const Header = () => {
  return (
      <header className="c-header">
        <div className="header__container">
          <div className="o-container">
            <div className="header__content">
              <Link className="header__logo" to="/">
                <Logo />
              </Link>
              <Navigation />
							<Button />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
