import { Link } from "react-router-dom";
import logo from "../images/icons/logo-sm.png";
import cart from "../images/icons/cart-sm.png";
import searchIcon from "../images/icons/search-icon-sm.png";

function Header() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com/mac/"
                  >
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com"
                  >
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com/ipad/"
                  >
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com/watch/"
                  >
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com/tv-home/"
                  >
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://www.apple.com/services/"
                  >
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav- Link js-scroll-trigger"
                    to="https://support.apple.com/"
                  >
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav- Link js-scroll-trigger" to="/search">
                    <img src={searchIcon} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav- Link js-scroll-trigger" to="/cart">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
