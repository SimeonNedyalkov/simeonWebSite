import { NavLink } from "react-router-dom";

export default function HireMe() {
  return (
    <div className="hireMeContainer">
      <div className="hireMepart1">
        <h1 className="text-6xl font-bold text-left">
          Let's work <br /> <p style={{ color: "#fee715" }}>together</p>
        </h1>
        <p className="text-2xl font-bold text-left">New business </p>
        <div className="emailWrapper">
          <span className="emailText text-xl mt-2 underline">
            simeon.nedyalkovv@gmail.com
          </span>
          <div className="copyHint">
            <span>Copy</span>
          </div>
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/simeon_nedyalkov?igsh=anRqM2h1aDZ2dGxy"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              height="22px"
              fill="#fee715"
            >
              <path d="M16.85 0h-9.7C3.207 0 0 3.207 0 7.15v9.7C0 20.793 3.207 24 7.15 24h9.7c3.943 0 7.15-3.207 7.15-7.15v-9.7C24 3.207 20.793 0 16.85 0zm4.736 16.85a4.735 4.735 0 01-4.736 4.736h-9.7a4.735 4.735 0 01-4.736-4.736v-9.7A4.735 4.735 0 017.15 2.414h9.7a4.735 4.735 0 014.736 4.736v9.7z"></path>
              <path d="M12 5.793A6.214 6.214 0 005.793 12 6.214 6.214 0 0012 18.207 6.214 6.214 0 0018.207 12 6.214 6.214 0 0012 5.793zm0 10a3.793 3.793 0 110-7.586 3.793 3.793 0 010 7.586zM18.219 7.327a1.487 1.487 0 100-2.975 1.487 1.487 0 000 2.975z"></path>
            </svg>
          </a>
          <a href="https://github.com/SimeonNedyalkov/" target="_blank">
            <svg
              fill="#fee715"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fee715"
              width="22px"
              height="22px"
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
                  d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100001718120923"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12.8 24.5"
              width="22px"
              height="22px"
              fill="#fee715"
            >
              <path d="M8.3 24.5V13.3H12l.6-4.3H8.3V6.2c0-1.3.4-2.1 2.2-2.1h2.3V.2C12.4.1 11 0 9.4 0 6.1 0 3.8 2 3.8 5.8V9H0v4.4h3.8v11.2h4.5z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/simeon-nedyalkov-3a62b616a"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 22"
              width="22px"
              height="22px"
              fill="#fee715"
            >
              <path d="M5.3 22H.6V7h4.7v15zM2.8 5.2C1.1 5.2 0 4 0 2.6 0 1.1 1.1 0 2.9 0s2.8 1.1 2.8 2.6c0 1.4-1.1 2.6-2.9 2.6zM24 22h-5.3v-7.7c0-2-.8-3.4-2.7-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.8-.1 1.2V22H8.1s.1-13.7 0-15h5.2v2.3c.3-1 2-2.5 4.7-2.5 3.3 0 5.9 2.2 5.9 6.8L24 22z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="hireMepart2">
        <p>Contact me here:</p>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </div>
  );
}
