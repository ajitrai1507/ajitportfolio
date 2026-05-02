import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>My Background & Journey</p>
        </div>
        <div className={styles.content}>
          <div className={`${styles.card} glass-card`}>
            <p>
              I am a dedicated <strong>Backend Developer</strong> with a passion for architecting scalable, efficient, and reliable server-side systems. Currently working at <strong>Insueta Tech Pvt. Ltd.</strong>, I focus on building robust APIs and optimizing backend infrastructures to support high-traffic applications.
            </p>
            <p>
              With a technical background spanning a Diploma and a Bachelor's in Computer Science, I bring a solid understanding of software engineering principles, data structures, and algorithms to every project I undertake.
            </p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name</span>
                <span className={styles.infoValue}>Ajit Rai</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>ajitrai1507@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Role</span>
                <span className={styles.infoValue}>Backend Developer</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>New Delhi, India</span>
              </div>
            </div>
          </div>
          
          <div className={styles.experienceSummary}>
            <div className={styles.summaryItem}>
              <h3>Backend Expert</h3>
              <p>Specialized in Node.js, Express, and NestJS for high-performance server logic.</p>
            </div>
            <div className={styles.summaryItem}>
              <h3>Database Pro</h3>
              <p>Proficient in PostgreSQL and MongoDB, ensuring data integrity and speed.</p>
            </div>
            <div className={styles.summaryItem}>
              <h3>Clean Coder</h3>
              <p>Committed to writing maintainable, well-documented, and scalable code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
