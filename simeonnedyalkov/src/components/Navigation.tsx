export default function Navigation() {
  return (
    <nav className="navigationContainer">
      <div className="">Simeon.</div>
      <div className="">
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
        <a href="#hire" className="">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
