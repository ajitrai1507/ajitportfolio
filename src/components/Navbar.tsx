'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(9,9,11,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '32px', height: '32px',
            borderRadius: '8px',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)' }}>
            ajit<span style={{ color: '#f87171' }}>.</span>dev
          </span>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}
          className="desktop-nav">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  borderRadius: '8px',
                  color: '#71717a',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
          <a
            href="/resume.pdf"
            style={{ fontSize: '14px', color: '#71717a', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            Resume
          </a>
          <a
            href="#contact"
            style={{
              fontSize: '14px',
              padding: '8px 20px',
              borderRadius: '10px',
              background: 'var(--fire)',
              color: '#fff',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 14px rgba(239,68,68,0.3)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f87171'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--fire)'; }}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#71717a',
            padding: '4px',
            display: 'none',
          }}
          className="hamburger-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen
              ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>
              : <><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(9,9,11,0.97)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                color: '#a1a1aa',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              padding: '12px',
              borderRadius: '10px',
              background: 'var(--fire)',
              color: '#fff',
              fontWeight: 500,
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
