'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Ajit
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              style={{ color: 'var(--primary)', marginLeft: '8px' }}
            >
              Rai
            </motion.span>
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <ul className={styles.links}>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#projects">Portfolio</Link></li>
          </ul>
          <Link href="#contact" className={styles.contactBtn}>Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className={styles.mobileLinks}>
              <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
              <li><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
              <li><Link href="#experience" onClick={toggleMenu}>Experience</Link></li>
              <li><Link href="#projects" onClick={toggleMenu}>Portfolio</Link></li>
              <li><Link href="#contact" onClick={toggleMenu} className={styles.mobileContactBtn}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
