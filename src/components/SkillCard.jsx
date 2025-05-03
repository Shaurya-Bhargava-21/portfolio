import { motion } from 'framer-motion'
import styles from './SkillCard.module.css'

const SkillCard = ({ title, icon, description, index }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  )
}

export default SkillCard