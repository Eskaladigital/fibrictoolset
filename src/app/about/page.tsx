export default function AboutPage() {
  const team = [
    {
      name: 'PEPE BUENDIA',
      role: 'Houdini TD | Pipeline TD',
      bio: 'Specializes in procedural and technical approaches for creating assets, environments, FX setups and Pipeline workflows within USD framework.',
      initials: 'PB',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pepebuendia/' },
        { label: 'YouTube', href: 'https://www.youtube.com/@pepe.buendia' },
      ],
    },
    {
      name: 'AGUSTIN GONZALEZ',
      role: 'CG Supervisor',
      bio: 'Specializing in surfacing, lighting, and compositing, with extensive experience in live-action films, game cinematics and feature animation. Passionate about leveraging emerging technologies and developing innovative workflows in Houdini and USD.',
      initials: 'AG',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agustingonzalezdelias/' },
        { label: 'ArtStation', href: 'https://www.artstation.com/agusgonzalez' },
      ],
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <p className="section-label">The Team</p>
          <h1>ABOUT US</h1>
        </div>
      </section>

      <section className="section">
        <div style={{
          maxWidth: 800, margin: '0 auto 5rem', textAlign: 'center',
          color: 'var(--gray)', fontWeight: 300, lineHeight: 2, fontSize: '1.05rem',
          padding: '0 2rem',
        }}>
          <p>Fibric was created by Pepe Buendía and Agustín González as an attempt to push the boundaries of character look development in Houdini.</p>
          <br />
          <p>What started as both a technical and artistic challenge quickly evolved into a focused research and development effort aimed at redefining how clothing can be created and art-directed in a production environment.</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3rem', maxWidth: 900, margin: '0 auto',
        }} className="team-grid-wrap">
          {team.map(t => (
            <div key={t.name} className="team-card-item" style={{
              padding: '3rem', border: '1px solid var(--border)',
              background: 'var(--surface)', transition: 'all 0.4s', textAlign: 'center',
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                border: '2px solid var(--gold)',
                background: 'linear-gradient(135deg, var(--surface2), var(--bg))',
                margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'var(--font-display)',
                fontSize: '2.5rem', color: 'var(--gold)',
              }}>
                {t.initials}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                letterSpacing: 1, marginBottom: '0.5rem',
              }}>{t.name}</h3>
              <span style={{
                color: 'var(--gold)', fontSize: '0.75rem', textTransform: 'uppercase',
                letterSpacing: '2px', fontWeight: 600, marginBottom: '1.5rem', display: 'block',
              }}>{t.role}</span>
              <p style={{
                color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7,
                marginBottom: '2rem', fontWeight: 300,
              }}>{t.bio}</p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                {t.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                    color: 'var(--gold)', textDecoration: 'none',
                    fontSize: '0.8rem', fontWeight: 600, transition: 'color 0.3s',
                  }}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
