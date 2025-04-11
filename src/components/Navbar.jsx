// import logo from "../assets/kevinRushLogo.png"

// import {FaLinkedin} from "react-icons/fa";
// import {FaGithub} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";
// import {FaInstagram} from "react-icons/fa";
// import {motion} from "framer-motion";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
            
//             <motion.span 
            
//             initial="initial"
//             animate="animate"
//             style={{ fontWeight: 'bold' , fontSize: 50 }}
//             >
//               T
//             </motion.span>
            
//         </div>
//         <div className="m-8 flex intems-center justify-center gap-4 text-2xl">
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaInstagram/>
//             <FaSquareXTwitter/> 
//         </div>
//     </nav>
//   )
// }

// export default Navbar

 "use client"

import { useState, useEffect } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiSun, FiMoon } from "react-icons/fi"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { isDarkMode, toggleTheme } = useTheme()

  // Track scroll position for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // For active section highlighting
      const sections = ["contact", "projects", "experience", "technologies", "about", "hero"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-neutral-950/90 backdrop-blur-md shadow-lg py-3"
            : "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontWeight: "bold", fontSize: 40 }}
            className={`${isDarkMode ? "text-cyan-400" : "text-cyan-600"} cursor-pointer`}
            onClick={() => scrollToSection("hero")}
          >
            T
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "technologies", label: "Technologies" },
              { id: "experience", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "text-cyan-400 font-medium"
                        : "text-cyan-600 font-medium"
                      : isDarkMode
                        ? "text-neutral-300 hover:text-cyan-400"
                        : "text-neutral-700 hover:text-cyan-600"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-neutral-800 text-yellow-300 hover:bg-neutral-700"
                : "bg-neutral-200 text-blue-600 hover:bg-neutral-300"
            } transition-colors`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${
                isDarkMode ? "text-neutral-300 hover:text-cyan-400" : "text-neutral-700 hover:text-cyan-600"
              } transition-colors`}
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${isDarkMode ? "bg-neutral-900" : "bg-neutral-100"} shadow-lg`}
        >
          <div className="container mx-auto px-8 py-4">
            <ul className="flex flex-col space-y-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "technologies", label: "Technologies" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-2 ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "text-cyan-400 font-medium"
                          : "text-cyan-600 font-medium"
                        : isDarkMode
                          ? "text-neutral-300 hover:text-cyan-400"
                          : "text-neutral-700 hover:text-cyan-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar

