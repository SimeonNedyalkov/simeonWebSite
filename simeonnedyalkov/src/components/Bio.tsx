import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start justify-center px-6 py-16 ml-3 text-left"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">Bio</h1>
      <p className="text-lg sm:text-lg lg:text-xl leading-relaxed tracking-wide">
        I'm{" "}
        <span className="font-semibold" style={{ color: "#fee715" }}>
          Simeon Nedyalkov
        </span>
        , a JavaScript Web Development graduate from Software University, class
        of 2024.
        <br />
        Currently pursuing Software Engineering and Management at Varna Free
        University.
        <br />
        I'm passionate about building{" "}
        <span className="font-semibold text-emerald-300">
          modern, responsive
        </span>{" "}
        web applications with clean and efficient code.
      </p>

      <div className="mt-8 text-lg sm:text-lg lg:text-xl tracking-wide space-y-2">
        <p>
          <span className="font-semibold">Languages:</span> English, Bulgarian
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:simeon.nedyalkov@gmail.com"
            className="text-blue-400 underline"
          >
            simeon.nedyalkov@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}
