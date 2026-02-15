import Link from 'next/link';
import Image from 'next/image';

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
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/images/logo/2f124e_0685e3d35c13411f9f4f55385045f9f1~mv2.png"
          alt="Fibric"
          width={140}
          height={40}
          style={{ height: 'auto', width: 'auto', maxHeight: 36 }}
        />
      </Link>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <Link href="/buy" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Buy</Link>
        <Link href="/about" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>About</Link>
        <Link href="/documentation" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Docs</Link>
        <Link href="/contact" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Contact</Link>
        <Link href="/faq" style={{ color: 'var(--gray)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>FAQ</Link>
      </div>
      <p style={{
        fontSize: '0.7rem', color: 'var(--gray)',
        textTransform: 'uppercase', letterSpacing: '1px',
        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
      }}>
        &copy;2026 Fibric Toolset. All rights reserved.
      </p>
    </footer>
  );
}
