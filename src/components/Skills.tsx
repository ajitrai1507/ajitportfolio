import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'TypeScript', level: 80 },
      { name: 'TailwindCSS', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Expertise</h2>
          <p className={styles.subtitle}>Skills & Technologies</p>
        </div>
        
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.tools}>
          <h3 className={styles.toolsTitle}>Other Tools & DevTools</h3>
          <div className={styles.toolTags}>
            {['Git', 'GitHub', 'RESTful APIs', 'Socket.io', 'Drizzle ORM', 'Sequelize', 'Redux Toolkit'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
