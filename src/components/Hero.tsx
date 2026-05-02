import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <div className={styles.badge}>FREEBIES</div> */}
          <h2 className={styles.subtitle}>Hello, I'm</h2>
          <h1 className={styles.title}>Ajit Rai</h1>
          <p className={styles.description}>
            I'm a <span className={styles.highlight}>Backend Developer</span> and <span className={styles.highlight}>Full Stack Enthusiast</span> based in New Delhi, building scalable and beautiful web applications through robust code and user-centric design.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">Say Hello</a>
          </div>

          <div className={styles.stats}>
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
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/portrait.png"
              alt="Ajit Rai Portrait"
              width={500}
              height={600}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.bgBlob}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
