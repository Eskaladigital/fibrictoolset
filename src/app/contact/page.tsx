'use client';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <p className="section-label">Get in Touch</p>
          <h1>CONTACT</h1>
          <p>For sales or studio evaluation related inquiries please get in touch.</p>
        </div>
      </section>

      <section style={{ padding: '6rem 4%', background: 'var(--surface)' }}>
        <div className="contact-grid-wrap" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: '5rem', maxWidth: 1000, margin: '0 auto',
        }}>
          <div>
            <p className="section-label">Sales & Support</p>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '2.5rem',
              letterSpacing: 2, marginBottom: '1.5rem',
              color: 'var(--white)', textShadow: 'var(--text-shadow-dark)',
            }}>GET IN TOUCH</h3>
            <p style={{
              color: 'var(--gray)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300,
              textShadow: 'var(--text-shadow-dark)',
            }}>
              For sales or studio evaluation related inquiries please get in touch using this email.
            </p>
            <a href="mailto:contact@fibrictoolset.com" style={{
              color: 'var(--gold)', textDecoration: 'none', fontWeight: 600,
              fontSize: '1.1rem', transition: 'color 0.3s', display: 'inline-block',
              marginBottom: '2rem',
            }}>
              contact@fibrictoolset.com
            </a>
            <p style={{
              color: 'var(--gray)', lineHeight: 1.8, fontWeight: 300,
              textShadow: 'var(--text-shadow-dark)',
            }}>
              For further questions or support please submit your ticket using the form.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-row-wrap" style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" placeholder="First name" required style={inputStyle} />
              <input type="text" placeholder="Last name" style={inputStyle} />
            </div>
            <input type="text" placeholder="Subject *" required style={inputStyle} />
            <input type="email" placeholder="Email *" required style={inputStyle} />
            <div className="form-row-wrap" style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" placeholder="DCC Version *" required style={inputStyle} />
              <input type="text" placeholder="Operating System *" required style={inputStyle} />
            </div>
            <textarea placeholder="Message *" required style={{
              ...inputStyle, minHeight: 130, resize: 'vertical' as const,
            }} />
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              <span>{submitted ? '✓ Sent!' : 'Submit'}</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem 1.2rem',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.85rem',
  color: 'var(--white)',
  outline: 'none',
  transition: 'all 0.3s',
};
