import styles from './Projects.module.css';

const projects = [
  {
    title: 'Real-time Chat App',
    category: 'Full Stack',
    description: 'A robust messaging platform built with Socket.io and Node.js.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Socket.io'],
    image: '💬'
  },
  {
    title: 'E-commerce Engine',
    category: 'Backend Heavy',
    description: 'High-performance e-commerce backend with payment and cart logic.',
    tech: ['Express', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒'
  },
  {
    title: 'Task Manager Pro',
    category: 'SaaS Tool',
    description: 'Task management system with real-time updates and notifications.',
    tech: ['NestJS', 'Drizzle ORM', 'Next.js'],
    image: '✅'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>Recent Projects</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.card} glass-card`}>
              <div className={styles.imageBox}>
                <span className={styles.emoji}>{project.image}</span>
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
                <a href="#" className={styles.viewBtn}>View Project ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
