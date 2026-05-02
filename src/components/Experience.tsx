import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Insueta Tech Pvt. Ltd.',
    role: 'Backend Developer',
    period: '2025 June - Present',
    description: [
      'Developed and maintained RESTful APIs to support web and mobile applications.',
      'Optimized backend functionality for high performance and reliability.',
      'Collaborated on feature implementation and system troubleshooting.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Journey</h2>
          <p className={styles.subtitle}>Work Experience</p>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot}></div>
              <div className={`${styles.content} glass-card`}>
                <div className={styles.meta}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.company}>{exp.company}</h4>
                <ul className={styles.list}>
                  {exp.description.map((desc, dIndex) => (
                    <li key={dIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
