// "use client"

// import { RiReactjsLine } from "react-icons/ri"
// import { TbBrandNextjs } from "react-icons/tb"
// import { SiMongodb, SiJavascript, SiPython, SiHtml5, SiCss3, SiMysql } from "react-icons/si"
// import { DiRedis } from "react-icons/di"
// import { FaNodeJs } from "react-icons/fa"
// import { BiLogoPostgresql } from "react-icons/bi"
// import { motion } from "framer-motion"

// // Custom Java icon component
// const JavaIcon = () => (
//   <svg viewBox="0 0 128 128" className="text-7xl" width="1em" height="1em">
//     <path
//       fill="#0074BD"
//       d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
//     ></path>
//     <path
//       fill="#EA2D2E"
//       d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
//     ></path>
//     <path
//       fill="#0074BD"
//       d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
//     ></path>
//     <path
//       fill="#EA2D2E"
//       d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
//     ></path>
//     <path
//       fill="#0074BD"
//       d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
//     ></path>
//   </svg>
// )

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
//   const techStack = [
//     { icon: <SiJavascript className="text-7xl text-yellow-400" />, name: "JavaScript" },
//     { icon: <JavaIcon />, name: "Java" }, // Using custom Java icon
//     { icon: <SiPython className="text-7xl text-blue-500" />, name: "Python" },
//     { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React" },
//     { icon: <TbBrandNextjs className="text-7xl" />, name: "Next.js" },
//     { icon: <SiHtml5 className="text-7xl text-orange-500" />, name: "HTML" },
//     { icon: <SiCss3 className="text-7xl text-blue-400" />, name: "CSS" },
//     { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB" },
//     { icon: <SiMysql className="text-7xl text-blue-600" />, name: "MySQL" },
//     { icon: <DiRedis className="text-7xl text-red-700" />, name: "Redis" },
//     { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
//     { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, name: "PostgreSQL" },
//   ]

//   return (
//     <div id="technologies" className="border-b border-neutral-800 pb-24 pt-16">
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
//         {techStack.map((tech, index) => (
//           <motion.div
//             key={index}
//             variants={iconVariants((index % 5) + 2)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-500 transition-colors duration-300"
//           >
//             {tech.icon}
//             <p className="text-center mt-2 text-sm">{tech.name}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default Technologies



"use client"

import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"

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
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center mt-2 text-sm">React</p>
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center mt-2 text-sm">React</p>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
        >
          <TbBrandNextjs className="text-7xl" />
          <p className="text-center mt-2 text-sm">Next.js</p>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p className="text-center mt-2 text-sm">MongoDB</p>
        </motion.div>

        <motion.div
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
        >
          <DiRedis className="text-7xl text-red-700" />
          <p className="text-center mt-2 text-sm">Redis</p>
        </motion.div>

        <motion.div
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <p className="text-center mt-2 text-sm">Node.js</p>
        </motion.div>

        <motion.div
          className={`rounded-2xl border-4 ${
            isDarkMode ? "border-neutral-800 hover:border-cyan-500" : "border-neutral-200 hover:border-cyan-600"
          } p-6 transition-colors duration-300`}
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <p className="text-center mt-2 text-sm">PostgreSQL</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies

