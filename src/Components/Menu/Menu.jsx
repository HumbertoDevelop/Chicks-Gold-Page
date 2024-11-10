import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export const Menu = ({ menu, toggleMenu }) => {
  return (
    <div className={menu ? "menu active" : "menu"}>
      <div className="menu_container">
        <div className="container-menu-icon_menu">
          <input
            type="text"
            name="searcher"
            id="searcher"
            className="input-reset"
            placeholder="Search..."
          />
          <IoIosSearch className="search-icon" />
          <IoMenu className="menu-icon" onClick={toggleMenu} />
        </div>
        <div className="options_mobile">
          <div className="sign-btn_btn_mobile">
            SIGN IN <FaUser className="sign-btn_icon_mobile" />
          </div>
          <div className="container-select-usd_mobile">
            <select className="container-select-usd_select_mobile">
              <option value="usd">USD</option>
              <option value="usd">USD</option>
              <option value="usd">USD</option>
            </select>
            <IoIosArrowDown className="arrow-select_mobile" />
          </div>
          <div className="cart_mobile">
            <FaCartShopping className="cart-icon_mobile" />
            CART (0)
          </div>
        </div>
        <ul className="menu_container_ul">
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
      </div>
    </div>
  );
};
