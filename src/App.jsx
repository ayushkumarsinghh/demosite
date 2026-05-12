import React from 'react';
import './index.css';

const App = () => {
  const primaryServices = [
    { title: 'Taxation & Returns', desc: 'Expert Income Tax, GST, and TDS filing for manufacturers, traders, and service providers.' },
    { title: 'Entity Incorporation', desc: 'End-to-end setup for Pvt Ltd, LLP, Partnership, and Proprietorship firms.' },
    { title: 'Audit & Compliance', desc: 'Audit certifications, project reports for bank loans, and MCA annual filings.' },
  ];

  const specializedServices = [
    'ISO Certification', 'DIN Registration', 'Digital Signature (DSC)', 
    'Import Export Code (IEC)', 'MSME/Udyam Registration', 'Trade & Labour Licenses',
    'FSSAI Food License', 'Drug License', 'Trademark & Copyright'
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
          <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>
            GSL <span style={{ color: 'var(--color-accent)' }}>TAX</span>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#services" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Solutions</a>
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Consult Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container" style={{ padding: 'var(--gap-section) 0', textAlign: 'center' }}>
        <span className="section-tag">Established 2012</span>
        <h1>Premium Tax Strategy. <br />Expert Business Setup.</h1>
        <p style={{ marginTop: '1rem', maxWidth: '750px', margin: '1rem auto' }}>
          The trusted partner for over 1,000 businesses across AP, Telangana, and South India. Led by senior CA and CMA professionals.
        </p>
        <div className="hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#contact" className="btn-primary">Claim Your Consultation</a>
          <a href="#services" className="btn-outline">Explore Solutions</a>
        </div>
      </section>

      {/* Authority Stats */}
      <section id="about" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>12+</div>
            <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>1,000+</div>
            <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Firms Supported</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>6+</div>
            <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Key Regions</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>100%</div>
            <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Compliance Rate</div>
          </div>
        </div>
      </section>

      {/* Primary Solutions */}
      <section id="services" className="container" style={{ padding: 'var(--gap-section) 0' }}>
        <h2 style={{ textAlign: 'center' }}>Professional Capabilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {primaryServices.map((s, i) => (
            <div key={i} className="card">
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Presence */}
      <section id="regions" style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--gap-section) 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Our Strategic Presence</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {locations.map((loc, i) => (
              <span key={i} style={{ padding: '0.5rem 1.25rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contact" className="container" style={{ padding: 'var(--gap-section) 0', textAlign: 'center' }}>
        <div style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: 'var(--radius-sm)' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>Elevate your business compliance.</h2>
          <p style={{ marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
            Direct access to our senior consultancy team via WhatsApp for immediate support.
          </p>
          <a href="https://wa.me/917780749434" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', background: 'white', color: 'var(--color-accent)' }}>Message on WhatsApp</a>
        </div>
      </section>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)', textAlign: 'center', fontSize: '0.85rem' }}>
        <div className="container">
          <p>© 2026 GSL Tax Consultancy Services. Professional CA/CMA-Led Team.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
