"use client"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import BackToTop from "./components/BackToTop"
import SocialSidebar from "./components/SocialSideBar"
import { ThemeProvider } from "./components/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Get the theme from ThemeProvider
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Set up a mutation observer to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          setIsDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${
        isDarkMode ? "dark bg-neutral-950 text-neutral-300" : "bg-white text-neutral-800"
      }`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className={`absolute top-0 z-[-2] h-screen w-screen ${
            isDarkMode
              ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
              : "bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"
          }`}
        ></div>
      </div>

      <Navbar />
      <SocialSidebar />

      <div className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      <footer className={`py-8 mt-8`}>
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <p className={`${isDarkMode ? "text-neutral-400" : "text-neutral-600"} mb-4 text-sm font-medium`}>
              BUILT WITH
            </p>
            <div className="flex items-center justify-center gap-12">
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="React"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Vite"
              >
                <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite" className="h-8 w-8" />
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Tailwind CSS"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Tailwind CSS"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
          
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

export default App
