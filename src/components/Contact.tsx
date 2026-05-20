'use client';
const Contact = () => {
  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
          <rect x="2" y="4" width="20" height="16" rx="2"/>
        </svg>
      ),
      label: 'Email',
      value: 'ajitrai1507@gmail.com',
      href: 'mailto:ajitrai1507@gmail.com',
      color: 'rgba(239,68,68,0.1)',
      borderColor: 'rgba(239,68,68,0.2)',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+91 7503172305',
      href: 'tel:+917503172305',
      color: 'rgba(249,115,22,0.1)',
      borderColor: 'rgba(249,115,22,0.2)',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'New Delhi, India',
      href: null,
      color: 'rgba(245,158,11,0.1)',
      borderColor: 'rgba(245,158,11,0.2)',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/917503172305',
      color: 'rgba(37,211,102,0.1)',
      borderColor: 'rgba(37,211,102,0.2)',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ajit-rai-b18164220/', color: '#38bdf8' },
    { name: 'GitHub', href: 'https://github.com/ajitrai1507', color: '#a1a1aa' },
    { name: 'Twitter (X)', href: 'https://x.com/AjitRai38853877', color: '#fff' },
  ];

  return (
    <section id="contact" style={{ padding: '96px 24px 64px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '56px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: '#f87171', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Get In Touch
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
          Let&apos;s{' '}
          <span className="gradient-text">Connect</span>
        </h2>
        <p style={{ fontSize: '15px', color: '#71717a', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
          Have a project or opportunity? I&apos;m always open to discussing backend roles, freelance work, or just a great conversation.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
        {/* Contact info card */}
        <div className="bento-card" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Contact Info</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactItems.map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: item.color, border: `1px solid ${item.borderColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: '#52525b', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ fontSize: '13px', color: '#e4e4e7', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f87171'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#e4e4e7'; }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '13px', color: '#e4e4e7' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social + CTA card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="bento-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Find Me On</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(9,9,11,0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                    color: '#a1a1aa',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(239,68,68,0.2)'; el.style.color = '#fff'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.05)'; el.style.color = '#a1a1aa'; }}
                >
                  {social.name}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <a
            href="mailto:ajitrai1507@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(239,68,68,0.3)',
              transition: 'all 0.3s ease',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 12px 36px rgba(239,68,68,0.45)'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 28px rgba(239,68,68,0.3)'; el.style.transform = 'translateY(0)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
              <rect x="2" y="4" width="20" height="16" rx="2"/>
            </svg>
            Send Me an Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '80px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: '#3f3f46' }}>
          © {new Date().getFullYear()} Ajit Rai — Built with{' '}
          <span style={{ color: '#f87171' }}>♥</span>{' '}
          using Next.js
        </p>
      </footer>
    </section>
  );
};

export default Contact;
