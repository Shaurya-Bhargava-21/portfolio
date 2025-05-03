import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setFormSubmitted(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Reset form submitted state after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }
  
  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }
  }
  
  if (formSubmitted) {
    return (
      <motion.div 
        className={styles.formSuccess}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.checkmark}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
      </motion.div>
    )
  }
  
  return (
    <motion.form 
      className={styles.form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <motion.input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className={errors.name ? styles.inputError : ''}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <motion.input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className={errors.email ? styles.inputError : ''}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject (Optional)</label>
        <motion.input 
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <motion.textarea 
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className={errors.message ? styles.inputError : ''}
        />
        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
      </div>
      
      <motion.button 
        type="submit"
        className={`button ${styles.submitButton}`}
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm