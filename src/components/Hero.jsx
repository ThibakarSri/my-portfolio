"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { CV_URL } from "../constants"

const Hero = () => {
  const { isDarkMode } = useTheme()
  const [welcomeIndex, setWelcomeIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaitingAfterDeletion, setIsWaitingAfterDeletion] = useState(false)

  // Welcome messages in different languages
  const welcomeMessages = [
    "Welcome, I'm",
    "Vanakkam, I'm",
    "Ayubowan, I'm",
    "Hola, I'm",
    "Welkom, I'm",
    "Bonjour, I'm",
    // "வரவேற்கிறேன், I'm",
    // "你好, I'm",
    // "こんにちは, I'm",
  ]

  // Different roles to type
  const roles = ["Software Engineering Undergraduate", "UI/UX Designer", "Web Developer"]

  // Typing effect
  useEffect(() => {
    let timeout

    if (isWaitingAfterDeletion) {
      // Wait a bit after fully deleting text before starting to type the next role
      timeout = setTimeout(() => {
        setIsWaitingAfterDeletion(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setIsDeleting(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }

    const currentRole = roles[roleIndex]

    if (!isDeleting && typedText === currentRole) {
      // Pause at the end of typing before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && typedText === "") {
      // When done deleting, set waiting state
      setIsWaitingAfterDeletion(true)
    } else {
      // Handle typing or deleting
      const delta = isDeleting ? 50 : 100 // Delete faster than type

      timeout = setTimeout(() => {
        setTypedText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1)
          } else {
            return currentRole.substring(0, prev.length + 1)
          }
        })
      }, delta)
    }

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex, roles, isWaitingAfterDeletion])

  // Rotate welcome message
  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [welcomeMessages.length])

  return (
    <div
      id="hero"
      className={`min-h-screen flex items-center ${isDarkMode ? "text-neutral-300" : "text-neutral-800"} border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-28 md:pt-32`}
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-start">
          <motion.p
            key={welcomeIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-sm md:text-base ${isDarkMode ? "text-cyan-400" : "text-cyan-600"} font-mono mb-2`}
          >
            {welcomeMessages[welcomeIndex]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-6xl md:text-7xl lg:text-8xl font-bold ${isDarkMode ? "text-white" : "text-neutral-900"} mb-4`}
          >
            Thibakar Sri<span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-2xl md:text-3xl lg:text-4xl font-medium ${isDarkMode ? "text-cyan-400" : "text-cyan-600"} mb-6 h-12`}
          >
            <span className={`border-r-2 ${isDarkMode ? "border-cyan-400" : "border-cyan-600"} pr-1 animate-pulse`}>
              {typedText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={`${isDarkMode ? "text-neutral-300" : "text-neutral-700"} max-w-2xl mb-8 text-lg`}
          >
            I'm a passionate developer focused on creating elegant solutions to complex problems. I specialize in
            building responsive web applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-gradient-to-r from-cyan-600 to-blue-700 text-white"
              } font-medium rounded-full hover:opacity-90 transition-all duration-300`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 ${
                isDarkMode
                  ? "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  : "border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              } font-medium rounded-full transition-all duration-300`}
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
