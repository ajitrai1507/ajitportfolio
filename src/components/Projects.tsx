'use client';
import Image from 'next/image';

const frontendProjects = [
  {
    title: 'AdsGrind',
    company: 'Frontend / Marketing',
    description: 'A global user acquisition marketing platform designed for scalable growth for mobile applications.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: 'https://www.adsgrind.com/',
    image: '/adsgrind.png',
    accent: '#f87171',
    accentBg: 'rgba(239,68,68,0.05)',
    accentBorder: 'rgba(239,68,68,0.2)',
    glowColor: 'rgba(239,68,68,0.05)',
  },
  {
    title: 'AccessNovaa',
    company: 'Frontend / Accessibility',
    description: 'A digital accessibility platform providing tools to ensure inclusive and compliant digital documents.',
    tech: ['Next.js', 'React', 'Accessibility APIs'],
    link: 'https://www.accessnovaa.com/',
    image: '/accessnovaa.png',
    accent: '#38bdf8',
    accentBg: 'rgba(14,165,233,0.05)',
    accentBorder: 'rgba(14,165,233,0.2)',
    glowColor: 'rgba(14,165,233,0.05)',
  },
  {
    title: 'Techmore IT Solutions',
    company: 'Frontend / IT Services',
    description: 'A comprehensive IT and E-publishing platform specializing in PDF accessibility and WCAG compliance.',
    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://techmoreitsolutions.com/',
    image: '/techmore.png',
    accent: '#a78bfa',
    accentBg: 'rgba(139,92,246,0.05)',
    accentBorder: 'rgba(139,92,246,0.2)',
    glowColor: 'rgba(139,92,246,0.05)',
  },
];

const backendProjects = [
  {
    title: 'Cannooh POS',
    company: 'Insueta • 2025–Present',
    description: 'Point-of-sale system where I developed the Users module and secure Payment processing module with Razorpay integration.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Razorpay'],
    link: 'https://cannooh.com/',
    accent: '#f87171',
    accentBg: 'rgba(239,68,68,0.08)',
    accentBorder: 'rgba(239,68,68,0.25)',
    glowColor: 'rgba(239,68,68,0.06)',
  },
  {
    title: 'Secure Transport',
    company: 'Insueta • 2025–Present',
    description: 'Secure transport service platform where I architected and implemented the Vehicle management and logistics tracking module.',
    tech: ['NestJS', 'PostgreSQL', 'Drizzle ORM'],
    link: 'https://www.securetranspo.com/',
    accent: '#fb923c',
    accentBg: 'rgba(249,115,22,0.08)',
    accentBorder: 'rgba(249,115,22,0.25)',
    glowColor: 'rgba(249,115,22,0.06)',
  },
];

type Project = typeof frontendProjects[0] & { image?: string };

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

const FolderIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
  </svg>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className="bento-card"
    style={{
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = project.accentBorder; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${project.glowColor}`; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
  >
    {/* Glow */}
    <div style={{
      position: 'absolute', top: '-40px', right: '-40px',
      width: '120px', height: '120px',
      background: project.glowColor,
      borderRadius: '50%', filter: 'blur(40px)',
      pointerEvents: 'none',
    }} />

    {/* Image (if exists) */}
    {project.image && (
      <div style={{
        width: '100%', height: '180px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        position: 'relative',
        background: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', opacity: 0.85 }}
        />
      </div>
    )}

    {/* Header row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '10px',
        background: project.accentBg, border: `1px solid ${project.accentBorder}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <FolderIcon color={project.accent} />
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '28px', height: '28px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#71717a', textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#71717a'; }}
      >
        <ExternalLinkIcon />
      </a>
    </div>

    {/* Badge */}
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '999px',
      fontSize: '10px',
      fontWeight: 500,
      border: `1px solid ${project.accentBorder}`,
      background: project.accentBg,
      color: project.accent,
      marginBottom: '8px',
      width: 'fit-content',
    }}>
      {project.company}
    </span>

    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{project.title}</h3>
    <p style={{ fontSize: '12px', color: '#71717a', lineHeight: 1.65, marginBottom: '16px', flex: 1 }}>{project.description}</p>

    {/* Tech tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {project.tech.map((t) => (
        <span key={t} style={{
          padding: '2px 8px',
          fontSize: '10px',
          borderRadius: '6px',
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
          color: '#52525b',
        }}>{t}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '96px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Production Work
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
          Projects I&apos;ve{' '}
          <span className="gradient-text">shipped</span>
        </h2>
      </div>

      {/* Frontend Projects */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Frontend</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {frontendProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Backend Projects */}
      <div style={{ marginTop: '48px' }}>
        <p style={{ fontSize: '11px', color: '#fb923c', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Backend</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {backendProjects.map((project) => (
            <ProjectCard key={project.title} project={project as Project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
