import React from "react";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import telegram from "../assets/icons/telegram.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Luminae</h1>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Search Products" />

          <select>
            <option>All categories</option>
          </select>

          <button>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Help & support</li>
        </ul>
      </nav>

      <nav>
        <a href="#">
          <img src={instagram} alt="" />
        </a>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={telegram} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
