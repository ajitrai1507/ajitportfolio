import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Insueta Tech Pvt. Ltd.',
    role: 'Backend Developer',
    period: '2025 June - Present',
    description: [
      'Developed and maintained highly scalable RESTful APIs using Node.js and NestJS, supporting thousands of concurrent users.',
      'Architected and implemented secure payment gateways (Razorpay) and user authentication systems.',
      'Spearheaded the vehicle management and logistics tracking modules for large-scale enterprise applications.',
      'Automated deployment workflows using CI/CD pipelines and managed cloud infrastructure on Vercel and AWS.',
      'Optimized database queries and schema designs in PostgreSQL to improve system latency by 40%.'
    ]
  },
  {
    company: 'Freelance Full Stack Developer',
    role: 'Web Developer',
    period: '2024 - 2025 June',
    description: [
      'Built custom web solutions for small to medium businesses using Next.js and TailwindCSS.',
      'Successfully deployed and managed over 10+ web projects with a focus on performance and SEO.',
      'Integrated third-party APIs and managed complex state transitions in React applications.'
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
