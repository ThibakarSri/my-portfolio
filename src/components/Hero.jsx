// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/sri.jpg";
// import {motion} from "framer-motion";

// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     vidible: {
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.5, delay: delay},
//     }
// })

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                      variants={container(0)}
//                      initial="hidden"
//                      animate="visible"
//                      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
//                         Thibakar Sri
//                     </motion.h1>
//                     <motion.span
//                      variants={container(0.5)}
//                      initial="hidden"
//                      animate="visible"
//                      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
//                         Full Stack Developer
//                     </motion.span>
//                     <motion.p 
//                      variants={container(1)}
//                      initial="hidden"
//                      animate="visible"
//                      className="my-2 max-ww-xl py-6 font-light tracking-tighter"
//                     >
//                         {HERO_CONTENT}
//                     </motion.p>
//                 </div>  
//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex justify-center">
//                     <motion.img 
//                       initial={{x:100, opacity: 0}}
//                       animate={{x:0, opacity: 1}}
//                       transition={{ duration: 1, delay: 1.2  }}
//                       src={profilePic}
//                       alt="Thibakar Sri" 
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"

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
            <a
              href="#contact"
              className={`px-6 py-3 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-gradient-to-r from-cyan-600 to-blue-700 text-white"
              } font-medium rounded-md hover:opacity-90 transition-opacity`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get In Touch
            </a>

            <a
              href="#"
              className={`px-6 py-3 ${
                isDarkMode
                  ? "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  : "border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              } font-medium rounded-md transition-all`}
              onClick={(e) => {
                e.preventDefault()
                // You could add a download resume functionality here
                alert("Resume download functionality would go here")
              }}
            >
              Get Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

