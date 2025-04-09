"use client"

import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"

const Projects = () => {
  const { isDarkMode } = useTheme()

  return (
    <div id="projects" className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} pb-4 pt-16`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${
              isDarkMode ? "bg-neutral-900/50" : "bg-neutral-100"
            } rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="flex space-x-4">
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                    aria-label="View GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`rounded-full ${
                      isDarkMode ? "bg-neutral-800 text-cyan-400" : "bg-neutral-200 text-cyan-600"
                    } px-3 py-1 text-xs font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects

