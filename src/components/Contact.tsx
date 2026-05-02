import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.subtitle}>Have a project or opportunity? Say hello!</p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.infoCard} glass-card`}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>✉️</span>
                <div className={styles.details}>
                  <strong>Email</strong>
                  <a href="mailto:ajitrai1507@gmail.com">ajitrai1507@gmail.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <div className={styles.details}>
                  <strong>Phone</strong>
                  <a href="tel:+917503172305">+91 7503172305</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div className={styles.details}>
                  <strong>Location</strong>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className={`${styles.socialCard} glass-card`}>
              <h3 className={styles.socialTitle}>Find me on</h3>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/ajit-rai-b18164220/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                <a href="https://github.com/ajitrai1507" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
              </div>
            </div>
          </div>

          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Ajit Rai. Built with Next.js & Passion.</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
