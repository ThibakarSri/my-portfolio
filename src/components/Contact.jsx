"use client"

import { useState, useRef } from "react"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const { isDarkMode } = useTheme()
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const validate = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } 
    // else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters"
    // }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      setIsSubmitting(true)
      setSubmitError(null)
      
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = "service_5d4yy9l" 
      const templateId = "template_l7xobts" 
      const publicKey = "I97YkQjELjb4vdnyN"  

      
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text)
          setIsSubmitting(false)
          setSubmitSuccess(true)
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: ""
          })
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false)
          }, 5000)
        })
        .catch((error) => {
          console.error('Email sending failed:', error.text)
          setIsSubmitting(false)
          setSubmitError("Failed to send your message. Please try again later.")
        })
    }
  }

  return (
    <div id="contact" className={`border-b ${isDarkMode ? 'border-neutral-900' : 'border-neutral-200'} pb-20 pt-16`}>
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{ duration:0.5}}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{ duration: 0.7}}
          className="space-y-6"
        >
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Contact Information</h3>
            <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>Feel free to reach out to me through any of the following channels:</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'} flex items-center justify-center mt-1`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>Address</h4>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>{CONTACT.address}</p>
            </div>
            </div>
          </div>
            
          <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'} flex items-center justify-center mt-1`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>Phone</h4>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>{CONTACT.phoneNo}</p>
            </div>
          </div>
            
          <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'} flex items-center justify-center mt-1`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>Email</h4>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className={`${
                  isDarkMode 
                    ? 'text-neutral-400 hover:text-cyan-400' 
                    : 'text-neutral-600 hover:text-cyan-600'
                } transition-colors`}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'} flex items-center justify-center mt-1`}>
              <FaLinkedin className={`h-4 w-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <div>
              <h4 className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>LinkedIn</h4>
              <a 
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer" 
                className={`${
                  isDarkMode 
                    ? 'text-neutral-400 hover:text-cyan-400' 
                    : 'text-neutral-600 hover:text-cyan-600'
                } transition-colors`}
              >
                {CONTACT.linkedin}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'} flex items-center justify-center mt-1`}>
              <FaGithub className={`h-4 w-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <div>
              <h4 className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>GitHub</h4>
              <a 
                href={`https://${CONTACT.github}`}
                target="_blank"
                rel="noopener noreferrer" 
                className={`${
                  isDarkMode 
                    ? 'text-neutral-400 hover:text-cyan-400' 
                    : 'text-neutral-600 hover:text-cyan-600'
                } transition-colors`}
              >
                {CONTACT.github}
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{ duration: 0.7}}
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-1`}>
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-neutral-300' 
                    : 'bg-white border-neutral-300 text-neutral-800'
                } border ${errors.name ? 'border-red-500' : ''} rounded-full p-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? 'focus:ring-cyan-500' : 'focus:ring-cyan-600'
                } focus:border-transparent transition-colors`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-1`}>
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-neutral-300' 
                    : 'bg-white border-neutral-300 text-neutral-800'
                } border ${errors.phone ? 'border-red-500' : ''} rounded-full p-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? 'focus:ring-cyan-500' : 'focus:ring-cyan-600'
                } focus:border-transparent transition-colors`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-1`}>
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-neutral-300' 
                    : 'bg-white border-neutral-300 text-neutral-800'
                } border ${errors.email ? 'border-red-500' : ''} rounded-full p-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? 'focus:ring-cyan-500' : 'focus:ring-cyan-600'
                } focus:border-transparent transition-colors`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div className="relative">
              <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-1`}>
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-neutral-300' 
                    : 'bg-white border-neutral-300 text-neutral-800'
                } border ${errors.message ? 'border-red-500' : ''} rounded-2xl p-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? 'focus:ring-cyan-500' : 'focus:ring-cyan-600'
                } focus:border-transparent transition-colors`}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                  : 'bg-gradient-to-r from-cyan-600 to-blue-700'
              } text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <FaArrowRight />
                </>
              )}
            </motion.button>
            
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-xl">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-500 text-red-400 rounded-xl">
                {submitError}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact
