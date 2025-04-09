"use client"

import { CERTIFICATIONS } from "../constants"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FaAward } from "react-icons/fa"

const Certifications = () => {
  const { isDarkMode } = useTheme()

  return (
    <div
      id="certifications"
      className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-16`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications & Achievements
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`${
              isDarkMode ? "bg-neutral-900/50" : "bg-neutral-100"
            } rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex`}
          >
            <div className={`mr-4 mt-1 ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              <FaAward size={24} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                {cert.title}
              </h3>
              <p className={`text-sm ${isDarkMode ? "text-cyan-400" : "text-cyan-600"} mb-2`}>{cert.organization}</p>
              <p className={`${isDarkMode ? "text-neutral-300" : "text-neutral-700"} text-sm`}>{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Certifications

