'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            Ajit Rai
          </Link>
        </div>
        <div className={styles.navMenu}>
          <ul className={styles.links}>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#projects">Portfolio</Link></li>
          </ul>
          <Link href="#contact" className={styles.contactBtn}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
