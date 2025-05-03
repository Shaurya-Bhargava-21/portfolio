import { motion } from 'framer-motion'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <motion.div
        className={styles.logoContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className={styles.circle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        />
        
        <motion.span 
          className={styles.logoText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Portfolio
        </motion.span>
      </motion.div>
      
      <motion.div 
        className={styles.loadingBar}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  )
}

export default LoadingScreen