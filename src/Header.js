import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <button>
          <BiSearchAlt2 size={18} />
        </button>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart size={28} />
            <span className="header__optionLineTwo header__basketCount">
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
