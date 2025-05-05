import { motion } from "framer-motion";
import vfulogo from "../assets/education/R (1).png";
import softuniLogo from "../assets/education/R.png";

export default function Education() {
  return (
    <motion.div
      className="educationContainer p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="softuni"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Title */}
        <motion.div
          className="educationTitle mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold text-center">Education</h1>
        </motion.div>

        {/* VFU Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-1">
            Software Engineering and Management
          </h2>
          <h2 className="flex items-center gap-3 mb-1">
            <img
              src={vfulogo}
              width={150}
              height={80}
              alt="VFU Logo"
              className="vfuLogo rounded-sm"
            />
            <span className="text-sm">
              Varna Free University "Chernorizets Hrabar"
            </span>
          </h2>
          <h3 className="text-gray-600 text-sm mb-2">
            (November 2024 - till now)
          </h3>
          <p className="text-gray-700 text-sm">
            I am currently studying Software Engineering and Management,
            focusing on software development, system analysis, and project
            management. The program equips me with skills in programming,
            algorithms, and team collaboration using agile methodologies.
          </p>
        </motion.div>

        {/* SoftUni Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-1">
            JavaScript Web Developer
          </h2>
          <h2 className="flex items-center gap-2 mb-1">
            <img
              src={softuniLogo}
              width={40}
              height={40}
              alt="SoftUni Logo"
              className="rounded-sm"
            />
            <span className="text-sm">Software University</span>
          </h2>
          <h3 className="text-gray-600 text-sm mb-2">
            (January 2023 - September 2024)
          </h3>
          <p className="text-gray-700 text-sm">
            As a JavaScript Full-Stack Developer trainee, I developed skills in
            web development using modern tools and frameworks, including HTML,
            CSS, JavaScript, React, Angular, and Node.js. I also gained
            experience in testing, algorithms, databases, and version control
            with Git.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
