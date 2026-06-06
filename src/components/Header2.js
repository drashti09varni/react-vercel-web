import React from "react";
import Menu from "../assets/Mneu.svg"
import Logo from "../assets/svg-image-1.svg"
import Back from "../assets/Back.svg"
import Search from "../assets/Search Icon.svg"
import Cart from "../assets/Cart.svg"
import { Link } from "react-router-dom";



export default function Header2() {

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-3 ">
        <Link to="/" className="flex items-center">
          <img
            alt="menu"
            src={Back}
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <img
            alt="logo"
            src={Logo}
            className="h-6 -ml-6"
          />
        </Link>

        <div className="flex items-center ">
          <img
            alt="search"
            src={Search}
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <a href="#">
            <img
              alt="cart"
              src={Cart}
              className="w-6 h-6 ml-3"
            />
          </a>
        </div>
      </header>
    </div>
  );
}
