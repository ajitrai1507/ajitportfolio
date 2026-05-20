'use client';
const experiences = [
  {
    company: 'Insueta Tech Pvt. Ltd.',
    role: 'Backend Developer',
    location: 'New Delhi, India',
    period: '2025 June – Present',
    current: true,
    color: '#f87171',
    borderColor: 'rgba(239,68,68,0.2)',
    bgColor: 'rgba(239,68,68,0.05)',
    description: [
      'Developed and maintained highly scalable RESTful APIs using Node.js and NestJS, supporting thousands of concurrent users.',
      'Architected and implemented secure payment gateways (Razorpay) and user authentication systems.',
      'Spearheaded the vehicle management and logistics tracking modules for large-scale enterprise applications.',
      'Automated deployment workflows using CI/CD pipelines and managed cloud infrastructure on Vercel and AWS.',
      'Optimized database queries and schema designs in PostgreSQL to improve system latency by 40%.',
    ],
    tags: ['NestJS', 'Node.js', 'PostgreSQL', 'Razorpay', 'Drizzle ORM'],
  },
  {
    company: 'Freelance Full Stack Developer',
    role: 'Web Developer',
    location: 'Remote',
    period: '2024 – 2025 June',
    current: false,
    color: '#a78bfa',
    borderColor: 'rgba(139,92,246,0.2)',
    bgColor: 'rgba(139,92,246,0.05)',
    description: [
      'Built custom web solutions for small to medium businesses using Next.js and TailwindCSS.',
      'Successfully deployed and managed over 10+ web projects with a focus on performance and SEO.',
      'Integrated third-party APIs and managed complex state transitions in React applications.',
    ],
    tags: ['Next.js', 'React', 'TailwindCSS', 'Node.js', 'SEO'],
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '96px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Career Path
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
          1+ year of{' '}
          <span className="gradient-text">backend engineering</span>
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div
          className="timeline-line"
          style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '1px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                paddingLeft: '64px',
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '13px',
                top: '28px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 0 4px #09090b, 0 0 12px ${exp.color}66`,
              }} />

              {/* Card */}
              <div className="bento-card" style={{ padding: '28px' }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: exp.bgColor, border: `1px solid ${exp.borderColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={exp.color} strokeWidth="2">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        <rect width="20" height="14" x="2" y="6" rx="2"/>
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{exp.role}</h3>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: exp.color }}>{exp.company}</p>
                      <p style={{ fontSize: '12px', color: '#52525b', marginTop: '2px' }}>{exp.location}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <span style={{ fontSize: '12px', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                    {exp.current && (
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '2px 10px',
                        borderRadius: '999px',
                        fontSize: '10px',
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.25)',
                        color: '#f87171',
                      }}>
                        <span className="pulse" style={{
                          width: '6px', height: '6px',
                          borderRadius: '50%',
                          background: '#f87171',
                          display: 'inline-block',
                        }} />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {exp.description.map((desc, di) => (
                    <li key={di} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#a1a1aa', lineHeight: 1.65 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={exp.color} strokeWidth="2" style={{ flexShrink: 0, marginTop: '4px' }}>
                        <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
                      </svg>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '3px 10px',
                      fontSize: '11px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.03)',
                      color: '#71717a',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
