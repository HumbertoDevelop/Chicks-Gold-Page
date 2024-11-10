import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/chicks-logo-large.svg";
import { IoMenu } from "react-icons/io5";

export default function Header({ toggleMenu }) {
  return (
    <div className="navigation-container" >
      <div className="navbar">
        <div className="navbar_logo">
          <img src={Logo} alt="Logo" className="logo" />
          <span className="bar"></span>
        </div>
        <nav className="navbar_container">
          <ul className="navbar_container_ul">
            <li>
              <a href="#currency">CURRENCY</a>
              <IoIosArrowDown className="arrow" />
            </li>
            <li>
              <a href="#items">ITEMS</a>
              <IoIosArrowDown className="arrow" />
            </li>
            <li>
              <a href="#accounts">ACCOUNTS</a>
              <IoIosArrowDown className="arrow" />
            </li>
            <li>
              <a href="#services">SERVICES</a>
              <IoIosArrowDown className="arrow" />
            </li>
            <li>
              <a href="#more">MORE</a>
              <IoIosArrowDown className="arrow" />
            </li>
            <li>
              <a href="#sell">SELL</a>
              <IoIosArrowDown className="arrow" />
            </li>
          </ul>
        </nav>
        <div className="options">
          <div className="container-select-usd">
            <select className="container-select-usd_select">
              <option value="usd">USD</option>
              <option value="usd">USD</option>
              <option value="usd">USD</option>
            </select>
            <IoIosArrowDown className="arrow-select" />
          </div>
          <div className="cart">
            <FaCartShopping className="cart-icon" />
            CART (0)
          </div>
          <div className="container-sign-btn">
            <button className="sign-btn_btn desktop-btn">
              SIGN IN <FaUser className="sign-btn_icon" />
            </button>
          </div>
        </div>
        <div className="container-menu-icon" onClick={toggleMenu}>
          <IoMenu className="menu-icon" />
        </div>
      </div>
    </div>
  );
}
