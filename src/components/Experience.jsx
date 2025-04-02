// "use client"

// import { EXPERIENCES } from "../constants"
// import { motion } from "framer-motion"

// const Experience = () => {
//   return (
//     <div id="experience" className="border-b border-neutral-900 pb-4 pt-16">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Experience
//       </motion.h1>
//       <div className="max-w-5xl mx-auto">
//         {EXPERIENCES.map((experience, index) => (
//           <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap items-start">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.7 }}
//               className="w-full lg:w-1/4 mb-4 lg:mb-0"
//             >
//               <div className="lg:sticky lg:top-24">
//                 <p className="mb-2 text-sm text-cyan-400 font-medium">{experience.year}</p>
//                 <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
//               </div>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 0.7 }}
//               className="w-full lg:w-3/4 bg-neutral-900/50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//             >
//               <h6 className="mb-2 text-xl font-semibold text-white">
//                 {experience.role} <span className="text-cyan-400">@{experience.company}</span>
//               </h6>
//               <p className="mb-6 text-neutral-300 leading-relaxed">{experience.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {experience.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-cyan-400 border border-cyan-500/30"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Experience


"use client"

import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"

const Experience = () => {
  const { isDarkMode } = useTheme()

  return (
    <div id="experience" className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-16`}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="max-w-5xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap items-start">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <div className="lg:sticky lg:top-24">
                <p className={`mb-2 text-sm ${isDarkMode ? "text-cyan-400" : "text-cyan-600"} font-medium`}>
                  {experience.year}
                </p>
                <div
                  className={`h-1 w-16 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                      : "bg-gradient-to-r from-cyan-600 to-purple-700"
                  } rounded-full`}
                ></div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className={`w-full lg:w-3/4 ${
                isDarkMode ? "bg-neutral-900/50" : "bg-neutral-100"
              } rounded-lg p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <h6 className={`mb-2 text-xl font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                {experience.role}{" "}
                <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>@{experience.company}</span>
              </h6>
              <p className={`mb-6 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"} leading-relaxed`}>
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`rounded-full ${
                      isDarkMode
                        ? "bg-neutral-800 text-cyan-400 border border-cyan-500/30"
                        : "bg-neutral-200 text-cyan-600 border border-cyan-600/30"
                    } px-3 py-1 text-sm font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

