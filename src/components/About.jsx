
// "use client"

// import { ABOUT_TEXT } from "../constants"
// import { motion } from "framer-motion"
// import profilePic from "../assets/sri.jpg"
// import { useTheme } from "./ThemeProvider"

// const About = () => {
//   const { isDarkMode } = useTheme()

//   return (
//     <div id="about" className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-16`}>
//       <h2 className="my-20 text-center text-4xl">
//         About
//         <span className={isDarkMode ? "text-cyan-400 ml-2" : "text-cyan-600 ml-2"}>Me</span>
//       </h2>
//       <div className="flex flex-wrap">
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2 lg:p-8"
//         >
//           <div className="flex items-center justify-center">
//             <div className="relative">
//               <div
//                 className={`absolute -inset-1 ${
//                   isDarkMode
//                     ? "bg-gradient-to-r from-cyan-500 to-purple-600"
//                     : "bg-gradient-to-r from-cyan-600 to-purple-700"
//                 } rounded-full blur-md opacity-75`}
//               ></div>
//               <img
//                 className="relative rounded-full border-4 border-neutral-900 w-64 h-64 md:w-80 md:h-80 object-cover"
//                 src={profilePic || "/placeholder.svg"}
//                 alt="Thibakar Sri"
//               />
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2"
//         >
//           <div className="flex justify-center lg:justify-start">
//             <div className="my-2 max-w-xl py-6 space-y-4">
//               <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>Who am I?</h3>
//               <p className={`${isDarkMode ? "text-neutral-300" : "text-neutral-700"} leading-relaxed`}>{ABOUT_TEXT}</p>
//               <div className="pt-4">
//                 <a
//                   href="#"
//                   className={`px-6 py-3 ${
//                     isDarkMode
//                       ? "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
//                       : "border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
//                   } font-medium rounded-md transition-all`}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     // You could add a download resume functionality here
//                     alert("Resume download functionality would go here")
//                   }}
//                 >
//                   Download Resume
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default About


"use client"

import { useState } from "react"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import profilePicBW from "../assets/thibaB.jpeg"
import profilePicColor from "../assets/thiba.jpeg"
import { useTheme } from "./ThemeProvider"

const About = () => {
  const { isDarkMode } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div id="about" className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-16`}>
      <h2 className="my-20 text-center text-4xl">
        About
        <span className={isDarkMode ? "text-cyan-400 ml-2" : "text-cyan-600 ml-2"}>Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="relative">
              <div
                className={`absolute -inset-1 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                    : "bg-gradient-to-r from-cyan-600 to-purple-700"
                } rounded-full blur-md opacity-75`}
              ></div>
              <div
                className="relative overflow-hidden rounded-full border-4 border-neutral-900 w-64 h-64 md:w-80 md:h-80"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.img
                  className="w-full h-full object-cover"
                  src={isHovered ? profilePicColor : profilePicBW}
                  alt="Thibakar Sri"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    filter: isHovered ? "brightness(1.1)" : "brightness(1)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6 space-y-4">
              <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>Who am I?</h3>
              <p className={`${isDarkMode ? "text-neutral-300" : "text-neutral-700"} leading-relaxed`}>{ABOUT_TEXT}</p>
              <div className="pt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 ${
                    isDarkMode
                      ? "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                      : "border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                  } font-medium rounded-full transition-all duration-300 inline-block`}
                  onClick={(e) => {
                    e.preventDefault()
                    // You could add a download resume functionality here
                    alert("Resume download functionality would go here")
                  }}
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

