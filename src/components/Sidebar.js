import React from "react"
//import { FaTimes } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import { Link } from "gatsby"

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const data = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "about us",
      url: "/about/",
    },
    {
      id: 3,
      text: "menu",
      url: "/menu/",
    },
    // {
    //   id: 4,
    //   text: "blog",
    //   url: "/blog/",
    // },
    {
      id: 4,
      text: "contact",
      url: "/contact/",
    },
  ]

  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button
        onClick={toggleSidebar}
        className="close-btn"
        aria-label="Close Button"
      >
        <GrClose className="text-3xl" />
      </button>
      <div className="side-container">
        <div className={`${isOpen ? "sidebar-links" : ""}`}>
          {data.map(link => {
            return (
              <ul className="">
                <li key={link.id} className="opacity-0">
                  <Link
                    to={link.url}
                    className="block font-light text-center capitalize text-gray-600 mb-3 text-3xl transition-all duration-300 ease-linear  hover:text-purple-700"
                  >
                    {link.text}
                  </Link>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
