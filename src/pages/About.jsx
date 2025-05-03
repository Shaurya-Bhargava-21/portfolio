import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import styles from './About.module.css'
import pic from "../assets/shaurya.jpg"

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'KIIT University',
      period: '2022 - Present',
      description: 'CGPA: 9.12',
      icon: <FaGraduationCap />
    },
    {
      degree: '12th Grade (CBSE)',
      institution: 'Montfort Senior Secondary School',
      period: '2022',
      description: 'Percentage: 89%',
      icon: <FaGraduationCap />
    },
    {
      degree: '10th Grade (CBSE)',
      institution: 'Montfort Senior Secondary School',
      period: '2020',
      description: 'Percentage: 90%',
      icon: <FaGraduationCap />
    }
  ]
  
  const experience = [
    {
      position: 'Social Media Intern',
      company: 'Soham Shyam Creatives',
      period: 'June 2024 - Aug 2024',
      description: [
        'Designed and managed the company\'s website using GoDaddy.',
        'Leveraged Shopify for seamless e-commerce integration.',
        'Created and updated product pages with accurate descriptions.',
        'Maintained the product database using Google Sheets.'
      ],
      icon: <FaBriefcase />
    },
    {
      position: 'Point of Contact (POC) - Web Development Domain',
      company: 'GeeksforGeeks KIIT',
      period: 'Aug 2023 - Present',
      description: [
        'Conducted hands-on workshops on frontend and backend technologies.',
        'Collaborated with peers to organize hackathons and coding competitions.',
        'Facilitated access to GeeksforGeeks resources for seamless learning.'
      ],
      icon: <FaBriefcase />
    }
  ]
  
  const leadership = [
    {
      title: 'Genesis (Blockchain Speaker Event)',
      description: 'Managed sponsorship and collaborated with speakers and sponsors for a successful event with 500+ participants.',
      icon: <FaAward />
    },
    {
      title: 'Hyperthon (Open-Domain Hackathon)',
      description: 'Administrated and marketed the event to execute a successful open-domain hackathon, overseeing budgeting, operations, and partnerships.',
      icon: <FaAward />
    }
  ]
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <div className={styles.aboutPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Me
            </motion.h1>
            
            <motion.div 
              className={styles.profileImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={pic} 
                alt="Profile"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.bio}
            >
              Computer Science Engineering student with strong problem-solving skills and a passion for web development. Proficient in frontend technologies and experienced in building interactive applications using the MERN stack. Enthusiastic about developing user-friendly and efficient digital solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className={`section ${styles.educationSection}`}>
        <div className="container">
          <SectionTitle title="Education" />
          
          <div className={styles.timelineContainer}>
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
              >
                <div className={styles.timelineIcon}>
                  {item.icon}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{item.period}</span>
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className={`section ${styles.experienceSection}`}>
        <div className="container">
          <SectionTitle title="Experience" />
          
          <div className={styles.timelineContainer}>
            {experience.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
              >
                <div className={styles.timelineIcon}>
                  {item.icon}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.date}>{item.period}</span>
                  <h3>{item.position}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className={`section ${styles.leadershipSection}`}>
        <div className="container">
          <SectionTitle title="Leadership" />
          
          <div className={styles.leadershipContainer}>
            {leadership.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.leadershipCard}
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
              >
                <div className={styles.leadershipIcon}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className={`section ${styles.skillsDetailSection}`}>
        <div className="container">
          <SectionTitle title="Technical Skills" />
          
          <div className={styles.skillCategories}>
            <motion.div 
              className={styles.skillCategory}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>Programming & Web Technologies</h3>
              <div className={styles.skillTags}>
                <span>Java</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Firebase</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.skillCategory}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <h3>Databases</h3>
              <div className={styles.skillTags}>
                <span>Firestore</span>
                <span>MongoDB</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.skillCategory}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
            >
              <h3>Hosting & Deployment</h3>
              <div className={styles.skillTags}>
                <span>Shopify</span>
                <span>Vercel</span>
                <span>GoDaddy</span>
                <span>Firebase Hosting</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.skillCategory}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
            >
              <h3>Tools</h3>
              <div className={styles.skillTags}>
                <span>Git</span>
                <span>GitHub</span>
                <span>Excel</span>
                <span>Google Sheets</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Interested in working together?</h2>
            <p>Let's connect and discuss how I can contribute to your project or team.</p>
            <motion.a 
              href="/contact" 
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About