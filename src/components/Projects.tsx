'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const frontendProjects = [
  {
    title: 'AdsGrind',
    category: 'Frontend / Marketing',
    description: 'A global user acquisition marketing platform designed for scalable growth for mobile applications.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: 'https://www.adsgrind.com/',
    image: '/adsgrind.png'
  },
  {
    title: 'AccessNovaa',
    category: 'Frontend / Accessibility',
    description: 'A digital accessibility platform providing tools to ensure inclusive and compliant digital documents.',
    tech: ['Next.js', 'React', 'Accessibility APIs'],
    link: 'https://www.accessnovaa.com/',
    image: '/accessnovaa.png'
  },
  {
    title: 'Techmore IT Solutions',
    category: 'Frontend / IT Services',
    description: 'A comprehensive IT and E-publishing platform specializing in PDF accessibility and WCAG compliance.',
    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://techmoreitsolutions.com/',
    image: '/techmore.png'
  }
];

const backendProjects = [
  {
    title: 'Cannooh POS',
    category: 'Backend / FinTech',
    description: 'Point-of-sale system where I developed the Users module and secure Payment processing module.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    link: 'https://cannooh.com/',
    image: '/cannooh.png'
  },
  {
    title: 'Secure Transport',
    category: 'Backend / Logistics',
    description: 'Secure transport service platform where I architected and implemented the Vehicle management module.',
    tech: ['NestJS', 'PostgreSQL', 'Drizzle ORM'],
    link: 'https://www.securetranspo.com/',
    image: '/securetranspo.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>Recent Works</p>
        </div>
        
        <div className={styles.sectionDivider}>
          <h3 className={styles.categoryHeading}>Frontend Projects</h3>
        </div>
        
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {frontendProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`${styles.card} glass-card`}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageBox}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>View Project ↗</a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.sectionDivider} style={{ marginTop: '60px' }}>
          <h3 className={styles.categoryHeading}>Backend Projects</h3>
        </div>
        
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {backendProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`${styles.card} glass-card`}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageBox}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>View Project ↗</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
