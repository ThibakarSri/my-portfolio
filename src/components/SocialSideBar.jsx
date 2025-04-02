"use client"

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { CONTACT } from "../constants"

const SocialSidebar = () => {
  const { isDarkMode } = useTheme()

  return (
    <>
      {/* Left sidebar - social icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center z-10"
      >
        <div className="flex flex-col space-y-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "text-neutral-400 hover:text-cyan-400" : "text-neutral-600 hover:text-cyan-600"
            } transition-colors`}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "text-neutral-400 hover:text-cyan-400" : "text-neutral-600 hover:text-cyan-600"
            } transition-colors`}
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "text-neutral-400 hover:text-cyan-400" : "text-neutral-600 hover:text-cyan-600"
            } transition-colors`}
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "text-neutral-400 hover:text-cyan-400" : "text-neutral-600 hover:text-cyan-600"
            } transition-colors`}
            aria-label="Twitter"
          >
            <FaSquareXTwitter size={22} />
          </a>
        </div>
        <div className={`w-px h-24 mt-6 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-400"}`}></div>
      </motion.div>

      {/* Right sidebar - email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center z-10"
      >
        <a
          href={`mailto:${CONTACT.email}`}
          className={`${
            isDarkMode ? "text-neutral-400 hover:text-cyan-400" : "text-neutral-600 hover:text-cyan-600"
          } transition-colors vertical-text`}
          style={{ writingMode: "vertical-rl" }}
        >
          {CONTACT.email}
        </a>
        <div className={`w-px h-24 mt-6 ${isDarkMode ? "bg-neutral-700" : "bg-neutral-400"}`}></div>
      </motion.div>
    </>
  )
}

export default SocialSidebar

