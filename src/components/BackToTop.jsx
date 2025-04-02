"use client"

import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useTheme()

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full ${
            isDarkMode ? "bg-cyan-500 text-white hover:bg-cyan-600" : "bg-cyan-600 text-white hover:bg-cyan-700"
          } shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all`}
          aria-label="Back to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop

