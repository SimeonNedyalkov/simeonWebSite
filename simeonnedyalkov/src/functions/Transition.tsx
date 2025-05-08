import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAVIGATION_LINKS } from "@/constants/constants";
import { useLocation } from "react-router-dom";
const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};
export default function Transition({ children }: any) {
  const location = useLocation();

  const [dimentions, setDimentions] = useState({
    height: 0,
    width: 0,
  });
  useEffect(() => {
    const resize = () => {
      setDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "47.5%",
      },
    },
    exit: {
      opacity: 0,
      top: "40%",
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="homeContainer curve">
      <motion.p {...anim(text)} className="curveLinks">
        {NAVIGATION_LINKS.map(
          (link: any) =>
            link.href === location.pathname && (
              <div key={link.href}>
                {link.label}
                <span style={{ fontSize: "46px", color: "#fee715" }}>.</span>
              </div>
            )
        )}
      </motion.p>
      <div
        style={{ opacity: dimentions.width == null ? 1 : 0 }}
        className="transitionBackground"
      ></div>
      {dimentions.width > 0 && <SVG {...dimentions}></SVG>}
      {children}
    </div>
  );
}
const SVG = ({ width, height }: any) => {
  const initialPath = `
  M0 300 
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300
  `;
  const targetPath = `
  M0 300 
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 0
  `;
  const curve = (initialPath: any, targetPath: any) => ({
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  });

  const translate = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <motion.svg className="transitionSVG" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))}>{}</motion.path>
    </motion.svg>
  );
};
