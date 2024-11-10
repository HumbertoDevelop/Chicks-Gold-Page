import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosSearch,
} from "react-icons/io";
import IconItem from "../../assets/item-icon.png";
import { dataItems } from "../../data/dataItems";
import { MdArrowDropUp } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiBroadsword, GiFeather, GiSettingsKnobs, GiSwapBag } from "react-icons/gi";

export const Content = () => {
  return (
    <div className="grid-container">
      <div className="title-grid">
        <h1>Condimentum consectetur</h1>
      </div>
      <div className="grid-filters">
        <div className="filter-one">
          <GiBroadsword className="filter-icon icon-sword" />
          <select
            name="select-filter"
            id="select-filter"
            className="select-filter select-game-filter select-game-filter-mobile select-game"
          >
            <option value="1">Select a game</option>
            <option value="2">Filter 2</option>
            <option value="3">Filter 3</option>
          </select>

          <IoIosArrowDown className="arrow-select_mobile arrow-game" />
        </div>
        <div className="container-menu-icon_menu2">
          <input
            type="text"
            name="searcher"
            id="searcher"
            className="input-reset input-content-search"
            placeholder="Search..."
          />
          <IoIosSearch className="search-icon2" />
        </div>
        <div className="filter-three">
          <div className="filter-three-content-2 money">
            <GiSwapBag className="filter-icon icon-bag-money" />
            <span className="sortBy sortBy-price">Price</span>
            <select
              name="select-filter"
              id="select-filter"
              className="select-filter select-game-filter"
            >
              <option value="1">All</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
            <IoIosArrowDown className="arrow-select_mobile" />
          </div>
        </div>
        <div className="filter-fourth">
          <div className="filter-three-content-2 feather">
            <GiFeather className="filter-icon icon-bag-money" />
            <span className="sortBy sortBy-price">Item Type</span>
            <select
              name="select-filter"
              id="select-filter"
              className="select-filter select-game-filter"
            >
              <option value="1">All</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
            <IoIosArrowDown className="arrow-select_mobile" />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="grid-content-header">
          <div className="showing-result-text">Showing 20 - from 125</div>
          <div className="filter-grid-content filter-three-content">
            <GiSettingsKnobs className="filter-icon" />
            <span className="sortBy">Sort By</span>
            <select
              name="select-filter"
              id="select-filter"
              className="select-filter"
            >
              <option value="1">Featured</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
            <IoIosArrowDown className="arrow-select_mobile" />
          </div>
        </div>
        <div className="grid-content">
          {dataItems.map((data, index) => (
            <div key={index} className="grid-item card">
              <div className="card-header">
                <div className="card-header-stock">
                  <div className="grid-item-sale">
                    {data.onSale ? (
                      <p className="sale">🟢 ON SALE</p>
                    ) : (
                      <p className="no-sale hide">🔴 NO SALE</p>
                    )}
                  </div>
                  <div className="grid-item-stock">
                    {data.inStock ? (
                      <p className="in-stock">In stock</p>
                    ) : (
                      <p className="out-stock">Out of stock</p>
                    )}
                  </div>
                </div>
                <div className="grid-item-amout">
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    className="amount"
                    value="1"
                  />

                  <MdArrowDropUp className="arrow-card-one" />
                  <MdArrowDropUp className="arrow-card-two" />
                </div>
              </div>
              <div className="grid-item-img">
                <img src={data.imgUrl} alt={data.title} />
              </div>
              <div className="grid-item-icon-title">
                <div className="grid-item-content-title">
                  <div className="grid-item-title">
                    <h2>{data.title}</h2>
                  </div>
                  <div className="grid-item-price">
                    <p>${data.price}</p>
                    <p className="offer">${data.price}</p>
                  </div>
                </div>
                <div className="grid-item-content-icon">
                  <img src={IconItem} alt={data.title} />
                </div>
              </div>
              <div className="grid-item-description">
                <p>{data.description}</p>
              </div>
              <div className="grid-item-button">
                <div className="grid-item-button-one">
                  <button className="btn btn-details">Details</button>
                </div>
                <div className="grid-item-button-two">
                  <button className="btn btn-add-cart">
                    Add
                    <span className="icon-card-btn">
                      <RiShoppingCart2Fill className="icon-cart" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-content-footer">
          <div className="pagination">
            <button className="btn-pagination pagination-arrow">
              <IoIosArrowBack />
            </button>
            <button className="btn-pagination pagination-num">1</button>
            <button className="btn-pagination pagination-num">2</button>
            <button className="btn-pagination pagination-num">3</button>
            <button className="btn-pagination pagination-num">4</button>
            <button className="btn-pagination pagination-num">...</button>
            <button className="btn-pagination pagination-num">11</button>
            <button className="btn-pagination pagination-arrow">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
