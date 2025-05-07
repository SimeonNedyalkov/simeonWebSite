import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { NAVIGATION_LINKS } from "@/constants/constants";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navigationContainer">
      <div className="navigationLogo">
        Simeon<span className="navigationLogo2">.</span>
      </div>

      {/* Hamburger icon */}
      <button className="lg:hidden z-[101]" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes className="h-6 w-6 text-white" />
        ) : (
          <FaBars className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-4/5 bg-[#101820] text-white z-[100] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-10 mr-10 flex flex-col p-8 space-y-6 text-lg font-medium">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="block w-full z-102">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="navigationItems">
        {NAVIGATION_LINKS.map((navlink) => {
          return navlink.label === "Hire Me" ? (
            <NavLink
              key={navlink.href}
              to={navlink.href}
              className="bg-[#fee715] text-[#101820] font-semibold rounded-full px-6 py-2 h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-95"
            >
              {navlink.label}
            </NavLink>
          ) : (
            <NavLink
              key={navlink.href}
              to={navlink.href}
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              {navlink.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
