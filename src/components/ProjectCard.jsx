import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </motion.a>
            <motion.a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard