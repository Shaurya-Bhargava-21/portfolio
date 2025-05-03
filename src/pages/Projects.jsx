import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import styles from './Projects.module.css'

const Projects = () => {
  const featuredProjects = [
    {
      title: 'MeantEazy',
      description: 'A role-based platform for mentors and mentees with real-time chat functionality.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'Firebase', 'Authentication'],
      liveUrl: 'https://meanteazy.vercel.app/login',
      repoUrl: 'https://github.com/Shaurya-Bhargava-21/MinorProject-Firebase'
    },
    {
      title: 'MovieMania',
      description: 'A movie bookmarking app with persistent favorites management using LocalStorage.',
      image: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'LocalStorage', 'API Integration'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Spotify Clone',
      description: 'A responsive front-end clone of Spotify with interactive UI components and audio controls.',
      image: 'https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Sanskriti Store',
      description: 'A modern e-commerce platform built with Next.js and Tailwind CSS, featuring a clean design and seamless shopping experience.',
      image: 'https://images.pexels.com/photos/7546636/pexels-photo-7546636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Vercel'],
      category: 'web',
      liveUrl: 'https://sanskritistore.vercel.app',
      repoUrl: 'https://github.com/Shaurya-Bhargava-21/Sanskriti'
    }
  ]

  return (
    <div className={styles.projectsPage}>
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <SectionTitle 
            title="My Projects" 
            subtitle="Here are some of my recent works"
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
        </div>
      </section>
    </div>
  )
}

export default Projects