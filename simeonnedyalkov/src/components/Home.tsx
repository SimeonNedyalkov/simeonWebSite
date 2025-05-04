import { motion } from "framer-motion";
import profile from "../assets/SN.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContainerText">Hello</div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={profile}
            width={450}
            height={450}
            alt="Simeon Nedyalkov"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  );
}
