import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import styles from './Home.module.css'
import pic from "../assets/shaurya.jpg"

const Home = () => {
  // Sample skills data
  const skills = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      description: 'Building responsive and interactive user interfaces using modern frameworks like React.'
    },
    {
      title: 'Backend Development',
      icon: <FaServer />,
      description: 'Designing and implementing robust server-side solutions with Node.js and Express.'
    },
    {
      title: 'Web Applications',
      icon: <FaLaptopCode />,
      description: 'Creating full-stack web applications with focus on performance and usability.'
    },
    {
      title: 'Responsive Design',
      icon: <FaMobileAlt />,
      description: 'Ensuring applications work perfectly across all devices and screen sizes.'
    }
  ]
  
  // Sample featured projects data
  const featuredProjects = [
    {
      title: 'Sanskriti Store',
      description: 'A modern e-commerce platform built with .js and Tailwind CSS, featuring a clean design and seamless shopping experience.',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'CSS', 'Vercel'],
      category: 'web',
      liveUrl: 'https://sanskritistore.vercel.app',
      repoUrl: '#'
    },
    {
      title: 'MeantEazy',
      description: 'A role-based platform for mentors and mentees with real-time chat functionality.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'Firebase', 'Authentication'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'MovieMania',
      description: 'A movie bookmarking app with persistent favorites management using LocalStorage.',
      image: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'LocalStorage', 'API Integration'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  return (
    <div className={styles.homePage}>
      <Hero />
      
      {/* About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <SectionTitle 
            title="About Me" 
            subtitle="Computer Science Engineering student with strong problem-solving skills and a passion for web development."
          />
          
          <div className={styles.aboutContent}>
            <motion.div 
              className={styles.aboutImage}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={pic} 
                alt="Profile" 
              />
            </motion.div>
            
            <motion.div 
              className={styles.aboutText}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p>
                I'm a motivated Computer Science Engineering student with a strong foundation in web development, focusing on building interactive applications using the MERN stack.
              </p>
              <p>
                My journey in software development started with learning the fundamentals of Java, then expanding to modern frontend technologies like HTML, CSS, JavaScript, and React.js.
              </p>
              <p>
                I'm experienced in designing and implementing responsive user interfaces that provide exceptional user experiences. Currently, I'm exploring backend frameworks and cloud integration to build more robust applications.
              </p>
              
              <motion.a 
                href="/about" 
                className="button outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More About Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <SectionTitle 
            title="My Skills" 
            subtitle="Here are some of my core competencies and technical skills"
          />
          
          <motion.div 
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Take a look at some of my recent work"
          />
          
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
          
          <div className={styles.viewAllProjects}>
            <motion.a 
              href="/projects" 
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className={`section ${styles.contactCta}`}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2>Let's Work Together</h2>
            <p>Interested in collaborating or have a project in mind? Feel free to reach out.</p>
            <motion.a 
              href="/contact" 
              className="button accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home