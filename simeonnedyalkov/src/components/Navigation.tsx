import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navigationContainer">
      <div className="navigationLogo">
        Simeon<span className="navigationLogo2">.</span>
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
        <a href="/resume" className="hover:underline">
          Resume
        </a>
        <a href="#contacts" className="hover:underline">
          Contact
        </a>
        <NavLink
          to="#hire"
          className="bg-[#fee715] text-[#101820] font-semibold rounded-full px-6 py-2 h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-95"
        >
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}
