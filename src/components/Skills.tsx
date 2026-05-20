'use client';

const techStack = [
  { name: 'Node.js',      color: 'tag-green' },
  { name: 'NestJS',       color: 'tag-fire' },
  { name: 'Express.js',   color: 'tag-zinc' },
  { name: 'TypeScript',   color: 'tag-sky' },
  { name: 'JavaScript',   color: 'tag-amber' },
  { name: 'PostgreSQL',   color: 'tag-sky' },
  { name: 'MongoDB',      color: 'tag-green' },
  { name: 'React.js',     color: 'tag-sky' },
  { name: 'Next.js',      color: 'tag-zinc' },
  { name: 'TailwindCSS',  color: 'tag-violet' },
  { name: 'Drizzle ORM',  color: 'tag-amber' },
  { name: 'Sequelize',    color: 'tag-orange' },
  { name: 'Razorpay',     color: 'tag-fire' },
  { name: 'Socket.io',    color: 'tag-pink' },
  { name: 'Docker',       color: 'tag-sky' },
  { name: 'Vercel',       color: 'tag-zinc' },
  { name: 'AWS',          color: 'tag-orange' },
  { name: 'Redux Toolkit', color: 'tag-violet' },
];

const backendSkills = [
  { name: 'Node.js', level: 90 },
  { name: 'NestJS', level: 82 },
  { name: 'Express.js', level: 88 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'MongoDB', level: 78 },
];

const frontendSkills = [
  { name: 'React.js', level: 75 },
  { name: 'Next.js', level: 72 },
  { name: 'TypeScript', level: 80 },
  { name: 'TailwindCSS', level: 85 },
];

const Stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Certifications' },
  { value: '40%', label: 'DB Latency Cut' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '13px', color: '#d4d4d8', fontWeight: 500 }}>{name}</span>
      <span style={{ fontSize: '12px', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
    </div>
    <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
      <div style={{
        height: '100%',
        width: `${level}%`,
        borderRadius: '2px',
        background: 'linear-gradient(90deg, #ef4444, #f97316)',
        boxShadow: '0 0 8px rgba(239,68,68,0.4)',
      }} />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '96px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
          What I Know
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
          Engineering that{' '}
          <span className="gradient-text">scales &amp; performs</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>

        {/* Backend skills card */}
        <div className="bento-card" style={{ gridColumn: 'span 4', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
                <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Backend</h3>
              <p style={{ fontSize: '12px', color: '#52525b' }}>Core expertise</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {backendSkills.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        {/* Frontend skills card */}
        <div className="bento-card" style={{ gridColumn: 'span 4', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/>
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Frontend</h3>
              <p style={{ fontSize: '12px', color: '#52525b' }}>Supporting skills</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {frontendSkills.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        {/* Tools card */}
        <div className="bento-card" style={{ gridColumn: 'span 4', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>DevTools</h3>
              <p style={{ fontSize: '12px', color: '#52525b' }}>Daily toolkit</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Git & GitHub', 'Docker', 'Postman', 'RESTful APIs', 'Socket.io', 'CI/CD', 'Redux Toolkit', 'Drizzle ORM'].map((tool) => (
              <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                </svg>
                <span style={{ fontSize: '13px', color: '#d4d4d8' }}>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width tech stack card */}
        <div className="bento-card shimmer" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>
                <path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Technology Stack</h3>
              <p style={{ fontSize: '12px', color: '#52525b' }}>Tools I use in production</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={tech.color}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'default',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}>
            {Stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{stat.value}</p>
                <p style={{ fontSize: '11px', color: '#52525b', marginTop: '2px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid > div { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
