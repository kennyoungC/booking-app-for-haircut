import React from "react"
import { Link } from "react-scroll"
import { useState } from "react"
import { closeIcon, hamburgerIcon } from "../utils/icons"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-200 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-xl">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div>
          <img src="https://via.placeholder.com/50" alt="Logo" />
        </div>

        {/* menu */}
        <ul className="hidden md:flex gap-4">
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="home" smooth={true} duration={500}>
              Book an Appointment
            </Link>
          </li>
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="about" smooth={true} duration={500}>
              testimonials
            </Link>
          </li>
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="skills" smooth={true} duration={500}>
              contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? hamburgerIcon() : closeIcon()}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-[4rem] left-0 w-full flex flex-col gap-2 p-4  bg-gray-200 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-xl md:hidden z-10"
          }
        >
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="home" smooth={true} duration={500}>
              Book an Appointment
            </Link>
          </li>
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="about" smooth={true} duration={500}>
              testimonials
            </Link>
          </li>
          <li className="text-xl text-black font-semibold hover:text-gray-400 ">
            <Link to="skills" smooth={true} duration={500}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
