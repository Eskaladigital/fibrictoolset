'use client';
import Link from 'next/link';

const plans = [
  {
    name: 'TRIAL',
    type: '14-day, node-locked',
    features: ['.hdalc format', 'Apprentice / Indie', '2 activations'],
    cta: 'Try Free',
    href: 'https://fibrictoolset.gumroad.com/l/zkbab?option=u0e27boWn31lKxzYA4fC8Q%3D%3D',
    featured: false,
  },
  {
    name: 'INDIE',
    type: 'Perpetual, node-locked',
    features: ['.hdalc format', 'Apprentice / Indie', '5 activations', 'Contact to reset'],
    cta: 'Buy Now',
    href: 'https://fibrictoolset.gumroad.com/l/zkbab?option=u5lkuimp9Xv-zQg70W6oVQ%3D%3D',
    featured: true,
  },
  {
    name: 'CORE',
    type: 'Annual, node-locked',
    features: ['.hda format', 'All editions', '3 activations', 'Contact to reset'],
    cta: 'Buy Now',
    href: 'https://fibrictoolset.gumroad.com/l/zkbab?option=3lJGfJa6TYXnL6rxw8uAMw%3D%3D',
    featured: false,
  },
  {
    name: 'STUDIO',
    type: 'Annual, floating',
    features: ['.hda format', 'All editions', 'Unlimited devices'],
    cta: 'Contact',
    href: '/contact',
    featured: false,
    isInternal: true,
  },
];

export default function BuyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <p className="section-label">Licensing</p>
          <h1>BUY FIBRIC</h1>
          <p>Our tiers are built to support creators at every level. Select the option that works best for you and start creating with Fibric.</p>
        </div>
      </section>

      <section className="section">
        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <h3>{plan.name}</h3>
              <p className="pricing-type">{plan.type}</p>
              <ul className="pricing-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              {plan.isInternal ? (
                <Link href={plan.href} className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
                  <span>{plan.cta}</span>
                </Link>
              ) : (
                <a href={plan.href} target="_blank" rel="noopener noreferrer"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
                  <span>{plan.cta}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
