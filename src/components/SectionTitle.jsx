import { motion } from 'framer-motion'
import styles from './SectionTitle.module.css'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.titleContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </motion.div>
      <div className={styles.underline}></div>
    </div>
  )
}

export default SectionTitle