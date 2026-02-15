'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/buy', label: 'Buy' },
    { href: '/about', label: 'About Us' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '0.8rem 4%' : '1.2rem 4%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-display)', fontSize: '1.8rem',
          letterSpacing: '3px', color: 'var(--white)', textDecoration: 'none',
        }}>
          FIBRIC<span style={{ color: 'var(--gold)' }}>.</span>
        </Link>

        <div className="nav-desktop" style={{
          display: 'flex', gap: '2rem', alignItems: 'center',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? 'var(--gold)' : 'var(--gray)',
              textDecoration: 'none', fontSize: '0.72rem',
              textTransform: 'uppercase', letterSpacing: '2px',
              fontWeight: 600, transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? 'var(--gold)' : 'var(--gray)')}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://fibrictoolset.gumroad.com/l/zkbab" target="_blank" rel="noopener noreferrer" style={{
            background: 'linear-gradient(135deg, var(--gold) 0%, var(--accent) 100%)',
            color: 'var(--bg)', padding: '0.6rem 1.8rem', borderRadius: '2px',
            fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '2px',
            fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s',
          }}>
            Get Started
          </a>
        </div>

        {/* Burger */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          cursor: 'pointer', background: 'none', border: 'none', padding: '5px',
        }}>
          <span style={{
            width: 24, height: 2, background: 'var(--white)', display: 'block',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            width: 24, height: 2, background: 'var(--white)', display: 'block',
            transition: 'all 0.3s', opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: 24, height: 2, background: 'var(--white)', display: 'block',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(10, 10, 10, 0.98)',
        zIndex: 99, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '2rem',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'all 0.4s',
      }}>
        {links.map(l => (
          <Link key={l.href} href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              letterSpacing: '4px', color: pathname === l.href ? 'var(--gold)' : 'var(--white)',
              textDecoration: 'none', transition: 'color 0.3s',
            }}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
