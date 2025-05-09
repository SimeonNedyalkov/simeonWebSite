import profile from "../assets/SN2.png";
import Blob from "./Blob";
import { HERO } from "@/constants/constants";
import { Button } from "./ui/button";
import { github } from "@/constants/constants";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

function Home() {
  const [reposCount, setReposCount] = useState(0);
  const [commitsCount, setCommitsCount] = useState(0);

  useEffect(() => {
    animate(0, github.repos, {
      duration: 2,
      onUpdate(value) {
        setReposCount(Math.floor(value));
      },
    });

    animate(0, github.commits, {
      duration: 2.5,
      onUpdate(value) {
        setCommitsCount(Math.floor(value));
      },
    });
  }, [github.repos, github.commits]);
  return (
    <div className="homeContainer">
      <div className="homeAllTextAndButtons">
        <div className="homeText">
          <div className="heroTitle mb-8 text-2xl font-light">{HERO.title}</div>
          <div className="text-3xl tracking-tighter lg:text-6xl pb-3 font-semibold">
            {HERO.greet}
          </div>
          <div className="text-3xl tracking-tighter lg:text-7xl textName font-bold">
            {HERO.name}
          </div>
        </div>
        <div className="contactButtons">
          <Button
            variant="outline"
            className="cvButton cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1FR4rM8yiobFs32aBGIov4hcI2gJkd0sK/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Download CV{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="homeSVG"
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
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                  fill="#fee715"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
                  fill="#fee715"
                ></path>{" "}
              </g>
            </svg>
          </Button>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-4 rounded-2xl text-[#fee715] w-fit">
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">Projects Completed</p>
              <p className="text-2xl font-bold">{reposCount}</p>
            </div>
            <div className="w-px h-10 hidden sm:block" />{" "}
            {/* Divider on large screens */}
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">Total Commits</p>
              <p className="text-2xl font-bold">{commitsCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg">
        {/* 3d */}
        <div className="blob">
          <Blob />
        </div>
        <div className="hImg">
          <img src={profile} alt="Simeon Nedyalkov" className="homeImg" />
        </div>
      </div>
    </div>
  );
}
export default Home;
