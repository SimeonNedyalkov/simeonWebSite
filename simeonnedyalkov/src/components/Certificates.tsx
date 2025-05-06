import { useState } from "react";
import { arrayWithCerts } from "@/constants/constants";
import { AnimatePresence, motion } from "framer-motion";
export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? arrayWithCerts : arrayWithCerts.slice(0, 6);
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };
  return (
    <div className="absolute bottom-0 py-4 px-2 sm:px-3 lg:px-4">
      <h1 className="text-2xl font-medium text-center mb-4 pb-2">
        📜 Certificates
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={showAll ? "all" : "partial"}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`}
        >
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.name + index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-white/40 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-100 flex flex-col p-2"
            >
              <h2 className="text-xs font-medium text-gray-300 mb-1">
                {cert.name}
              </h2>
              <iframe
                src={cert.file}
                width="100%"
                title={cert.name}
                className="w-full h-32 sm:h-40 border border-gray-300 rounded-sm mb-2"
              ></iframe>

              <div className="flex justify-between gap-1">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-100"
                >
                  <span className="text-xs">PDF</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link w-4 h-4"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-1.5 py-1 rounded-sm bg-white/10 hover:bg-white/20 text-white/80 transition-all duration-100 hover:scale-95 active:scale-90 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-xs">Official</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {arrayWithCerts.length > 6 && (
        <div className="flex mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-2 py-1 text-xs text-slate-300 hover:text-white font-medium transition-all duration-150 ease-in-out flex items-center gap-1 bg-white/10 hover:bg-white/20 rounded-sm border border-white/30 hover:border-white/40 backdrop-blur-sm group relative overflow-hidden"
          >
            {showAll ? "See Less" : "See More"}
            {!showAll ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-100 group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-100 group-hover:-translate-y-0.5"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
