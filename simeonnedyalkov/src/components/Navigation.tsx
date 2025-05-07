import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigationContainer">
      <div className="navigationLogo">
        Simeon<span className="navigationLogo2">.</span>
      </div>
      {/* menu for phone */}
      <div className="hamburger">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          width="24px"
          height="24px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 7L7 7M20 7L11 7"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M20 17H17M4 17L13 17"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 12H7L20 12"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="navigationItems">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/hireme"
          className="bg-[#fee715] text-[#101820] font-semibold rounded-full px-6 py-2 h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-95"
        >
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}
