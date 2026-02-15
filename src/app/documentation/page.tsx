export default function DocumentationPage() {
  const lessons = [
    'Intro to Fibric - Settings and nodes',
    'Intro to Fibric - Your first Fibric setup',
    'Intro to Fibric - Asset template',
    'Intro to Weave Canvas',
    'Intro to Pattern',
    'Intro to Generator',
    'Advance Generator workflows',
    'Intro to stitches',
    'Creating stitches with custom curves',
    'Custom stitches',
    'Intro to Damage',
    'Intro to Displacement',
    'Multi Fiber',
    'Intro to Fuzz',
    'Intro to sticker',
    'Intro to export configure',
    'Intro to deform',
    'Deform at render time',
  ];

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <p className="section-label">Learn</p>
          <h1>DOCUMENTATION</h1>
          <p>Everything you need to master Fibric Toolset.</p>
        </div>
      </section>

      {/* Doc access banner */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div style={{
          maxWidth: 800, margin: '0 auto 4rem', padding: '2.5rem 3rem',
          border: '1px solid var(--gold)', background: 'var(--gold-dim)', textAlign: 'center',
        }}>
          <p style={{ color: 'var(--gray)', marginBottom: '1.5rem', fontWeight: 300, lineHeight: 1.7, textShadow: 'var(--text-shadow-dark)' }}>
            Documentation will be available soon on this page. Meanwhile you can access the current doc site here.
          </p>
          <a href="https://sites.google.com/view/fibric-documentation/documentation?authuser=0"
            target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span>Access Doc</span>
          </a>
        </div>
      </section>

      {/* Fibric Essentials */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '2.5rem',
            letterSpacing: 2, marginBottom: '1rem',
            color: 'var(--white)', textShadow: 'var(--text-shadow-dark)',
          }}>FIBRIC ESSENTIALS</h2>
          <p style={{
            color: 'var(--gray)', fontWeight: 300, lineHeight: 1.8,
            maxWidth: 600, margin: '0 auto 1.5rem',
            textShadow: 'var(--text-shadow-dark)',
          }}>
            Dive into Fibric Essentials! In this course, we&apos;ll explore the complete Fibric toolset and show you how to use every feature to create amazing textile designs. You&apos;ll get tips and tricks not just for Fibric, but also for working more efficiently in Houdini.
          </p>
          <a href="https://www.fibrictoolset.com/_files/archives/2f124e_5731ce68ba82458eae62d383bed0159c.zip?dn=fibric_examples_essentials.zip"
            target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginBottom: '3rem' }}>
            <span>Download Files</span>
          </a>
        </div>

        {/* Lesson list */}
        <div style={{ maxWidth: 800, margin: '2rem auto 0' }}>
          {lessons.map((lesson, i) => (
            <div key={i} className="lesson-row" style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem',
              padding: '1.3rem 2rem', border: '1px solid var(--border)',
              borderBottom: i < lessons.length - 1 ? 'none' : '1px solid var(--border)',
              transition: 'all 0.3s', background: 'var(--bg)', cursor: 'default',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                color: 'var(--gold)', minWidth: '3rem', textAlign: 'center',
              }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.5px', color: 'var(--white)', textShadow: 'var(--text-shadow-dark)' }}>
                {lesson}
              </span>
              <span style={{ marginLeft: 'auto', color: 'var(--gray)', fontSize: '0.8rem' }}>▶</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
