import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 4%',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <Link href="/" style={{
        fontFamily: 'var(--font-display)', fontSize: '1.8rem',
        letterSpacing: '3px', color: 'var(--white)', textDecoration: 'none',
      }}>
        FIBRIC<span style={{ color: 'var(--gold)' }}>.</span>
      </Link>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <Link href="/buy" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Buy</Link>
        <Link href="/about" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>About</Link>
        <Link href="/documentation" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Docs</Link>
        <Link href="/contact" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</Link>
        <Link href="/faq" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>FAQ</Link>
      </div>
      <p style={{
        fontSize: '0.7rem', color: 'var(--gray)',
        textTransform: 'uppercase', letterSpacing: '1px',
      }}>
        &copy;2026 Fibric Toolset. All rights reserved.
      </p>
    </footer>
  );
}
