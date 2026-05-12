import React from 'react';
import './index.css';

const App = () => {
  const primaryServices = [
    { 
      title: 'Taxation & Returns', 
      desc: 'Expert Income Tax, GST, and TDS filing for manufacturers, traders, and service providers.',
      icon: '/assets/tax.png'
    },
    { 
      title: 'Entity Incorporation', 
      desc: 'End-to-end setup for Pvt Ltd, LLP, Partnership, and Proprietorship firms.',
      icon: '/assets/incorporation.png'
    },
    { 
      title: 'Audit & Compliance', 
      desc: 'Audit certifications, project reports for bank loans, and MCA annual filings.',
      icon: '/assets/audit.png'
    },
  ];

  const locations = [
    'Hyderabad', 'Vijayawada', 'Vizag', 'Guntur', 
    'Mahabubnagar', 'Anantapur', 'Bangalore', 'Chennai'
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <header>
        <div className="container">
          <div className="logo" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.04em' }}>
            GSL <span style={{ color: 'var(--color-accent-light)' }}>TAX</span>
          </div>
          <nav>
            <a href="#services" className="nav-link">Solutions</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn-primary">Consult Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <span className="section-tag">Established 2012</span>
          <h1>Premium Tax Strategy. <br />Expert Business Setup.</h1>
          <p>
            The trusted partner for over 1,000 businesses across AP, Telangana, and South India. Led by senior CA and CMA professionals.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary">Claim Your Consultation</a>
            <a href="#services" className="btn-outline">Explore Solutions</a>
          </div>
        </div>
      </section>

      {/* Authority Stats */}
      <section id="about" style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)' }}>12+</div>
              <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Experience</div>
            </div>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)' }}>1,000+</div>
              <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Firms Supported</div>
            </div>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)' }}>100%</div>
              <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Solutions */}
      <section id="services" style={{ padding: 'var(--gap-section) 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Professional Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {primaryServices.map((s, i) => (
              <div key={i} className="card">
                <img src={s.icon} alt={s.title} className="card-icon" />
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '1rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section id="regions" style={{ padding: 'var(--gap-section) 0', backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '3rem' }}>Our Strategic Presence</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {locations.map((loc, i) => (
              <span key={i} style={{ padding: '0.75rem 1.75rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)', boxShadow: 'var(--shadow-sm)' }}>
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contact" style={{ padding: 'var(--gap-section) 0' }}>
        <div className="container">
          <div style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, var(--color-accent) 0%, #1e40af 100%)', color: 'white', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '2.5rem' }}>Elevate your business compliance.</h2>
            <p style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
              Direct access to our senior consultancy team for immediate support and strategic tax planning.
            </p>
            <a href="https://wa.me/917780749434" className="btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', background: 'white', color: 'var(--color-accent)', border: 'none' }}>Message on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)', textAlign: 'center', fontSize: '0.95rem' }}>
        <div className="container">
          <p>© 2026 GSL Tax Consultancy Services. Professional CA/CMA-Led Team.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

