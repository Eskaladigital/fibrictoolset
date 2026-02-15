'use client';
import { useState } from 'react';

const faqData = [
  {
    q: 'What is Fibric?',
    a: 'Fibric is a procedural Houdini tool designed to generate and control curve based cloth with full artistic control. It is built as an HDA and integrates seamlessly into production pipelines.',
  },
  {
    q: 'What versions of Houdini are supported?',
    a: 'Fibric supports Houdini Indie, Houdini Core and Houdini FX. Houdini 20.5+ is required.',
  },
  {
    q: 'Does Fibric require Vellum?',
    a: 'No, Fibric does not require Vellum. Fibric result products could be moved/deformed/simulated by Vellum sims though.',
  },
  {
    q: 'Can I use Fibric in Solaris / USD?',
    a: 'Yes. Fibric works in SOP context and LOP context (via SOP Create or as a USD asset). It supports USD export and can be integrated into lighting.',
  },
  {
    q: 'Is it compatible with Linux?',
    a: 'Yes, Fibric works in both Windows and Linux. No Mac support.',
  },
  {
    q: 'What kind of input geometry does it accept?',
    a: "Fibric accepts any kind of geometry mesh. Mesh must contain UV's and must not overlap.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <p className="section-label">Support</p>
          <h1>FAQ</h1>
          <p>
            This section answers the most common questions about Fibric — from compatibility and performance to workflow integration and customization.
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {faqData.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  padding: '1.8rem 2.5rem 1.8rem 0',
                  background: 'none',
                  border: 'none',
                  color: openIndex === i ? 'var(--gold)' : 'var(--white)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  position: 'relative',
                }}
              >
                {item.q}
                <span style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: `translateY(-50%) rotate(${openIndex === i ? '45deg' : '0deg'})`,
                  fontSize: '1.5rem',
                  color: 'var(--gold)',
                  transition: 'transform 0.3s',
                }}>+</span>
              </button>
              <div style={{
                maxHeight: openIndex === i ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <div style={{
                  paddingBottom: '1.5rem',
                  color: 'var(--gray)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
