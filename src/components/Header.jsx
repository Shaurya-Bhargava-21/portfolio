import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <motion.div
            className={styles.logoCircle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <span>Portfolio</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                to="/"
                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/about"
                className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/projects"
                className={`${styles.navLink} ${location.pathname === '/projects' ? styles.active : ''}`}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/contact"
                className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
