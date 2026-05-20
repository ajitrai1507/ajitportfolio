'use client';
const About = () => {
  const highlights = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
          <path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>
        </svg>
      ),
      title: 'Backend Expert',
      desc: 'Specialized in Node.js, NestJS & Express for high-performance server logic.',
      color: 'rgba(239,68,68,0.1)',
      borderColor: 'rgba(239,68,68,0.2)',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
        </svg>
      ),
      title: 'Database Pro',
      desc: 'Proficient in PostgreSQL & MongoDB — data integrity at scale.',
      color: 'rgba(249,115,22,0.1)',
      borderColor: 'rgba(249,115,22,0.2)',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Clean Coder',
      desc: 'Committed to maintainable, well-documented, and scalable codebases.',
      color: 'rgba(245,158,11,0.1)',
      borderColor: 'rgba(245,158,11,0.2)',
    },
  ];

  const infoItems = [
    { label: 'Name', value: 'Ajit Rai' },
    { label: 'Email', value: 'ajitrai1507@gmail.com' },
    { label: 'Role', value: 'Backend Developer' },
    { label: 'Location', value: 'New Delhi, India' },
    { label: 'Education', value: 'B.Tech, Computer Science' },
    { label: 'Status', value: 'Open to Work ✦', highlight: true },
  ];

  return (
    <section id="about" style={{ padding: '96px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Who I Am
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
          Passionate about{' '}
          <span className="gradient-text">engineering that works</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Main bio card */}
        <div
          className="bento-card"
          style={{
            gridColumn: 'span 2',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{
            width: '40px', height: '40px',
            borderRadius: '12px',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.8 }}>
            I am a dedicated <strong style={{ color: '#fff' }}>Backend Developer</strong> with a passion for architecting scalable,
            efficient, and reliable server-side systems. Currently at{' '}
            <strong style={{ color: '#f87171' }}>Insueta Tech Pvt. Ltd.</strong>, I focus on building robust APIs
            and optimizing backend infrastructures to support high-traffic applications.
          </p>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.8 }}>
            With a technical background spanning a Diploma and a Bachelor&apos;s in Computer Science,
            I bring solid software engineering principles, data structures, and algorithmic thinking to every project.
          </p>

          {/* Info grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginTop: '8px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            {infoItems.map((item) => (
              <div key={item.label} style={{
                background: 'rgba(9,9,11,0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px',
                padding: '12px 16px',
              }}>
                <p style={{ fontSize: '11px', color: '#52525b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: item.highlight ? '#f87171' : '#e4e4e7', fontWeight: 500 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        {highlights.map((h) => (
          <div
            key={h.title}
            className="bento-card"
            style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '12px',
              background: h.color,
              border: `1px solid ${h.borderColor}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {h.icon}
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{h.title}</h3>
            <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.65 }}>{h.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-bio { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
