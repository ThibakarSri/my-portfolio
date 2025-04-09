// "use client"

// import { RiReactjsLine } from "react-icons/ri"
// import { TbBrandNextjs } from "react-icons/tb"
// import { SiMongodb } from "react-icons/si"
// import { DiRedis } from "react-icons/di"
// import { FaNodeJs } from "react-icons/fa"
// import { BiLogoPostgresql } from "react-icons/bi"
// import { motion } from "framer-motion"
// import { useTheme } from "./ThemeProvider"

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Number.POSITIVE_INFINITY,
//       repeatType: "reverse",
//     },
//   },
// })

// const Technologies = () => {
//   const { isDarkMode } = useTheme()

//   return (
//     <div
//       id="technologies"
//       className={`border-b ${isDarkMode ? "border-neutral-800" : "border-neutral-200"} pb-24 pt-16`}
//     >
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-8"
//       >

//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//         >
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//           <p className="text-center mt-2 text-sm">React</p>
//         </motion.div>

//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//         >
//           <TbBrandNextjs className="text-7xl" />
//           <p className="text-center mt-2 text-sm">Next.js</p>
//         </motion.div>

//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//         >
//           <SiMongodb className="text-7xl text-green-500" />
//           <p className="text-center mt-2 text-sm">MongoDB</p>
//         </motion.div>

//         <motion.div
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//         >
//           <DiRedis className="text-7xl text-red-700" />
//           <p className="text-center mt-2 text-sm">Redis</p>
//         </motion.div>

//         <motion.div
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//         >
//           <FaNodeJs className="text-7xl text-green-500" />
//           <p className="text-center mt-2 text-sm">Node.js</p>
//         </motion.div>

//         <motion.div
//           className={`rounded-2xl border-4 ${
//             isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
//           } p-6 transition-colors duration-300`}
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//         >
//           <BiLogoPostgresql className="text-7xl text-sky-700" />
//           <p className="text-center mt-2 text-sm">PostgreSQL</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default Technologies

"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { TECH_SKILLS } from "../constants"
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiFlutter, SiMysql, SiGit, SiPython } from "react-icons/si"
import { FaJava, FaCode } from "react-icons/fa"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  },
})

const getIcon = (iconName, size = 70) => {
  const icons = {
    FaJava: <FaJava size={size} />,
    SiPython: <SiPython size={size} />,
    SiJavascript: <SiJavascript size={size} />,
    SiHtml5: <SiHtml5 size={size} />,
    SiCss3: <SiCss3 size={size} />,
    SiReact: <SiReact size={size} />,
    SiFlutter: <SiFlutter size={size} />,
    SiMysql: <SiMysql size={size} />,
    SiGit: <SiGit size={size} />,
    FaCode: <FaCode size={size} />,
  }

  return icons[iconName] || <FaCode size={size} />
}

const Technologies = () => {
  const { isDarkMode } = useTheme()

  return (
    <div
      id="technologies"
      className={`border-b ${isDarkMode ? "border-neutral-800" : "border-neutral-200"} pb-24 pt-16`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technical Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {TECH_SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={iconVariants((index % 5) + 2)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
            } p-6 transition-colors duration-300 hover:shadow-lg`}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`${skill.color}`}>{getIcon(skill.icon)}</div>
            <p className="text-center mt-2 text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies

