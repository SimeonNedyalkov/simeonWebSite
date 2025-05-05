import { motion } from "framer-motion";
import { skills } from "@/constants/constants";
export default function Skills() {
  // Animation Variants
  const fadeInFrom = (direction: any) => {
    const variants = {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "bottom" ? 100 : 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    };
    return variants;
  };

  return (
    <div className="skillsAll flex flex-col gap-3">
      <div className="skillsForMobile">Skills</div>
      <div className="skillsAll1">
        <motion.div
          variants={fadeInFrom("left")}
          initial="hidden"
          animate="visible"
          className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
        >
          <div className="px-6 text-lg lg:text-2xl">Languages</div>
          {skills[0].languages.map((l) => (
            <div
              key={l.language}
              className="py-6 flex items-center justify-between border-b border-stone-50/30"
            >
              <div className="flex items-center">
                <img src={l.svg} alt="Icon" width="50" height="50" />
                <h3 className="px-6 text-lg lg:text-2xl">{l.language}</h3>
              </div>
              <div className="text-md font-semibod lg:text-xl">
                <span>{l.years}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInFrom("right")}
          initial="hidden"
          animate="visible"
          className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
        >
          <div className="px-6 text-lg lg:text-2xl">Frameworks</div>
          {skills[0].frameworks.map((l) => (
            <div
              key={l.framework}
              className="py-6 flex items-center justify-between border-b border-stone-50/30"
            >
              <div className="flex items-center">
                <img src={l.svg} alt="Icon" width="50" height="50" />
                <h3 className="px-6 text-lg lg:text-2xl">{l.framework}</h3>
              </div>
              <div className="text-md font-semibod lg:text-xl">
                <span>{l.years}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInFrom("bottom")}
          initial="hidden"
          animate="visible"
          className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
        >
          <div className="px-6 text-lg lg:text-2xl">Tools</div>
          {skills[0].tools.map((l) => (
            <div
              key={l.tool}
              className="py-6 flex items-center justify-between border-b border-stone-50/30"
            >
              <div className="flex items-center">
                <img src={l.svg} alt="Icon" width="50" height="50" />
                <h3 className="px-6 text-lg lg:text-2xl">{l.tool}</h3>
              </div>
              <div className="text-md font-semibod lg:text-xl">
                <span>{l.years}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={fadeInFrom("left")}
        initial="hidden"
        animate="visible"
        className="skillsAll2 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
      >
        <div className="px-6 text-lg lg:text-2xl">Databases</div>
        {skills[0].databases.map((l) => (
          <div
            key={l.database}
            className="py-6 flex items-center justify-between border-b border-stone-50/30"
          >
            <div className="flex items-center">
              <img src={l.svg} alt="Icon" width="50" height="50" />
              <h3 className="px-6 text-lg lg:text-2xl">{l.database}</h3>
            </div>
            <div className="text-md font-semibod lg:text-xl">
              <span>{l.years}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
