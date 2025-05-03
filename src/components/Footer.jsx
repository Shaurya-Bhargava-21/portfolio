import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.logoCircle} />
              <span>Portfolio</span>
            </div>
            <p>Building amazing digital experiences with modern technologies.</p>
          </div>
          
          <div className={styles.footerNav}>
            <div className={styles.footerNavColumn}>
              <h4>Pages</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.footerNavColumn}>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@yourportfolio.com">eng.shaurya@gmail.com</a></li>
                <li><a href="tel:+1234567890">+91 9001660044</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear}Shaurya Bhargava Portfolio. All rights reserved.</p>
          
          <div className={styles.socialLinks}>
            <motion.a 
              href="https://github.com/Shaurya-Bhargava-21/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/shaurya-bhargava-6072a5253/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/_shaurya_bhargava_?igsh=Y3YzaHNjZnFucTc3&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer