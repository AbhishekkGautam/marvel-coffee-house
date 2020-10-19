import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { FaAlignRight, FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const data = [
    {
      id: 1,
      text: "about us",
      url: "/about/",
    },
    {
      id: 2,
      text: "menu",
      url: "/menu/",
    },
    // {
    //   id: 3,
    //   text: "blog",
    //   url: "/blog/",
    // },
    {
      id: 3,
      text: "contact",
      url: "/contact/",
    },
  ];
  return (
    <nav className="w-full absolute z-10 top-0 left-0 h-24 flex items-center bg-white">
      <div className="w-11/12 max-w-screen-lg my-0 mx-auto lg:grid lg:grid-cols-2 lg:items-center">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" width="90px" height="90px" />
          </Link>
          <div className="lg:hidden flex justify-end items-center my-auto">
            <div className="text-gray-700">
              <FaCartArrowDown className="text-3xl mr-10 snipcart-checkout" />
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden focus:outline-none text-3xl mr-1 bg-transparent border-transparent text-gray-700 cursor-pointer"
              aria-label="Hamburger Menu"
            >
              <FaAlignRight />
            </button>
          </div>
        </div>

        <div className="">
          <ul className="hidden lg:flex lg:justify-end">
            {data.map(link => {
              return (
                <li key={link.id} className="mr-8">
                  <Link
                    to={link.url}
                    className="capitalize lg:py-2 lg:px-1 lg:hover:text-orange-800 lg:text-gray-600 lg:transition-all lg:duration-300 lg:ease-linear"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="#" className="text-gray-700" aria-label="Cart Icon">
                <FaCartArrowDown className="text-2xl snipcart-checkout" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
