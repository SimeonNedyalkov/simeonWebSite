import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navigationContainer">
      <div className="navigationLogo">
        Simeon <span className="navigationLogo2">.</span>
      </div>
      <div className="navigationItems">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#resume" className="hover:underline">
          Resume
        </a>
        <a href="#contacts" className="hover:underline">
          Contacts
        </a>
        <Link
          to="#hire"
          className="bg-[#fee715] text-[#101820] font-semibold rounded-full px-6 py-2 h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-95"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
