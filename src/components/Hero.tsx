'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <div className={styles.badge}>FREEBIES</div> */}
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Ajit Rai
          </motion.h1>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I'm a <span className={styles.highlight}>Backend Developer</span> and <span className={styles.highlight}>Full Stack Enthusiast</span> based in New Delhi, building scalable and beautiful web applications through robust code and user-centric design.
          </motion.p>
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#contact" className="btn btn-primary">Say Hello</a>
          </motion.div>

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>01 Y.</span>
              <span className={styles.statLabel}>Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>05+</span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/avatar.png"
              alt="Ajit Rai Portrait"
              width={500}
              height={600}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.bgBlob}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
