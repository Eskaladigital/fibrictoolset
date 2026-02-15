'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const VIDEO_INTRO = 'https://video.wixstatic.com/video/2f124e_8307078ac0014fa8bcd9aaf0dc862565/1080p/mp4/file.mp4';
const VIDEO_INTRO_POSTER = 'https://static.wixstatic.com/media/2f124e_8307078ac0014fa8bcd9aaf0dc862565f000.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_auto/2f124e_8307078ac0014fa8bcd9aaf0dc862565f000.jpg';
const VIDEO_ALT = 'https://video.wixstatic.com/video/2f124e_9ebe2d16b25048a6a122348d7cc3a5b5/1080p/mp4/file.mp4';
const VIDEO_TEAR_BURN = 'https://video.wixstatic.com/video/2f124e_6afd30d4037a4b47b1d352682b26fe5f/1080p/mp4/file.mp4';
const VIDEO_TEAR_BURN_POSTER = 'https://static.wixstatic.com/media/2f124e_6afd30d4037a4b47b1d352682b26fe5ff000.jpg/v1/fill/w_1920,h_810,al_c,q_85,enc_auto/2f124e_6afd30d4037a4b47b1d352682b26fe5ff000.jpg';

function LazyVideoSection({ src, poster, aspectRatio = '16/9' }: { src: string; poster?: string; aspectRatio?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ aspectRatio, background: 'var(--surface)' }}>
      {isVisible && (
        <video autoPlay muted loop playsInline preload="none" poster={poster} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO (con video de fondo) ===== */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={VIDEO_INTRO_POSTER}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
          }}
        >
          <source src={VIDEO_INTRO} type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.15, zIndex: 1,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          textAlign: 'center', maxWidth: 900, padding: '0 2rem',
          position: 'relative', zIndex: 2, animation: 'fadeUp 1s ease-out',
        }}>
          <p style={{
            fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '6px',
            color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 600,
            textShadow: '0 1px 2px rgba(0,0,0,0.8)',
          }}>Houdini Toolset — 2025</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.95, letterSpacing: '2px', marginBottom: '1.5rem',
            color: 'var(--white)', textShadow: '0 1px 2px rgba(0,0,0,0.8)',
          }}>FIBRIC TOOLSET</h1>
          <p style={{
            fontSize: '1.15rem', color: 'var(--gray)', maxWidth: 560,
            margin: '0 auto 2.5rem', fontWeight: 300, lineHeight: 1.8,
            textShadow: '0 1px 2px rgba(0,0,0,0.8)',
          }}>
            The first curve-based clothing and garment system in Houdini. Endless possibilities, maximum realism.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://fibrictoolset.gumroad.com/l/zkbab" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>Get Started</span>
            </a>
            <Link href="/contact" className="btn btn-outline"><span>Studios</span></Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section">
        <div className="section-header fade-in">
          <p className="section-label">Core Features</p>
          <h2 className="section-title">WHAT FIBRIC OFFERS</h2>
          <p className="section-desc">Infinite weave and knitting patterns with full artistic control at every step.</p>
        </div>
        <div className="features-grid fade-in">
          {[
            { num: '01', title: 'WEAVE CANVAS', desc: 'Generate and control infinite weave patterns with full procedural control.' },
            { num: '02', title: 'PATTERN SYSTEM', desc: 'Complex knitting and weave patterns with intuitive artistic controls.' },
            { num: '03', title: 'GENERATOR', desc: 'Advanced workflows for complete garments from curve definitions.' },
            { num: '04', title: 'STITCHES', desc: 'Custom stitch creation with user-defined curves and patterns.' },
            { num: '05', title: 'DAMAGE & EFFECTS', desc: 'Deform, tear and burn cloth at render time via Husk procedural.' },
            { num: '06', title: 'USD & SOLARIS', desc: 'Full pipeline integration. SOP and LOP contexts with USD export.' },
          ].map(f => (
            <div key={f.num} className="feature-card">
              <div className="feature-number">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VIDEO SUTIL 1 ===== */}
      <section style={{ padding: 0, background: 'var(--bg)', position: 'relative' }}>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <LazyVideoSection src={VIDEO_ALT} />
        </div>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(0deg, rgba(10,10,10,0.5) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.5) 100%)',
          pointerEvents: 'none',
        }}>
          <a href="https://fibrictoolset.gumroad.com/l/zkbab" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ pointerEvents: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            <span>Get Started</span>
          </a>
        </div>
      </section>

      {/* ===== SHOWCASE — LEENA ===== */}
      <section className="showcase fade-in">
        <div className="showcase-visual">
          <div style={{
            width: '100%', height: '100%', minHeight: 400,
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1a1210 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)',
              letterSpacing: 5, color: 'rgba(212,168,83,0.06)',
            }}>LEENA</span>
          </div>
        </div>
        <div className="showcase-content">
          <p className="section-label">Showcase</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '3rem',
            letterSpacing: 2, marginBottom: '0.5rem',
            color: 'var(--white)', textShadow: 'var(--text-shadow-dark)',
          }}>MEET LEENA</h2>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '2rem',
            textShadow: 'var(--text-shadow-dark)',
          }}>The fearless giant octopus hunter</p>
          <p style={{
            color: 'var(--gray)', lineHeight: 1.9, marginBottom: '2.5rem', fontWeight: 300,
            textShadow: 'var(--text-shadow-dark)',
          }}>
            Created to test and help develop Fibric in Houdini. Rendered with Karma in Solaris and powered by USD, Leena is the perfect crewmate on our journey to smarter, curve-driven clothing in CGI.
          </p>
          <a href="https://fibrictoolset.gumroad.com/l/uypcgn" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <span>Download Free Asset</span>
          </a>
        </div>
      </section>

      {/* ===== VIDEO SUTIL 2 ===== */}
      <section style={{ padding: 0, background: 'var(--bg)', position: 'relative' }}>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <LazyVideoSection src={VIDEO_INTRO} poster={VIDEO_INTRO_POSTER} />
        </div>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(0deg, rgba(10,10,10,0.5) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.5) 100%)',
          pointerEvents: 'none',
        }}>
          <Link href="/documentation" className="btn btn-outline btn-over-video" style={{ pointerEvents: 'auto' }}>
            <span>Learn More</span>
          </Link>
        </div>
      </section>

      {/* ===== HUSK DEFORMATION ===== */}
      <section className="section fade-in" style={{ textAlign: 'center' }}>
        <p className="section-label">Render Time Procedural</p>
        <h2 className="section-title">HUSK DEFORMATION</h2>
        <p className="section-desc" style={{ marginBottom: '2rem' }}>
          Deform, tear and burn your clothes at render time with our Husk Render Time Procedural. Full artistic control without pre-simulation.
        </p>
        <div style={{
          width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginBottom: '2rem',
          overflow: 'hidden', position: 'relative',
        }}>
          <LazyVideoSection src={VIDEO_TEAR_BURN} poster={VIDEO_TEAR_BURN_POSTER} aspectRatio="2.37" />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(0deg, rgba(10,10,10,0.4) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.4) 100%)',
            pointerEvents: 'none',
          }}>
            <a href="https://www.youtube.com/watch?v=N-tMsKeMq5c" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-over-video" style={{ pointerEvents: 'auto' }}>
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== HIVE / FMX ===== */}
      <section style={{
        padding: '5rem 4%', color: 'var(--bg)',
        background: 'linear-gradient(135deg, var(--gold) 0%, var(--accent-dark) 100%)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '3rem', flexWrap: 'wrap',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '3rem',
            letterSpacing: 2, marginBottom: '1rem',
          }}>FMX 2025</h2>
          <p style={{
            color: 'rgba(10, 10, 10, 0.7)', maxWidth: 450, lineHeight: 1.8, fontWeight: 400,
          }}>
            Fibric Toolset was firstly presented at Houdini HIVE — a 45-minute talk introducing all features and production workflows.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.sidefx.com/" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.7rem 2rem', border: '2px solid rgba(10,10,10,0.2)',
            fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px',
            fontWeight: 700, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            color: 'var(--bg)', textDecoration: 'none',
          }}>SIDEFX</a>
          <a href="https://fmx.de/en/home" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.7rem 2rem', border: '2px solid rgba(10,10,10,0.2)',
            fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px',
            fontWeight: 700, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            color: 'var(--bg)', textDecoration: 'none',
          }}>FMX 2025</a>
        </div>
      </section>
    </>
  );
}
