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
      <header className="animate-fade-in">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>
            GSL <span style={{ color: 'var(--color-accent)' }}>TAX</span>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#services" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Solutions</a>
            <a href="#regions" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Presence</a>
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Consult Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="animate-fade-in">
          <span className="section-tag">Established 2012</span>
          <h1>Precision Tax Strategy. <br />Expert Business Setup.</h1>
          <p style={{ marginTop: '1rem', maxWidth: '750px', margin: '1rem auto' }}>
            The trusted partner for over 1,000 businesses across AP, Telangana, and South India. Led by senior CA and CMA professionals.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary">Claim Your Consultation</a>
            <a href="#services" className="btn-outline">Explore Solutions</a>
          </div>
        </div>
      </section>

      {/* Primary Solutions */}
      <section id="services" className="container" style={{ paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {primaryServices.map((s, i) => (
            <div key={i} className="card">
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '3rem' }}>Specialized Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {specializedServices.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text)' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Focus Section */}
      <section className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Start Your Business with Professional Assistance</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          Planning to launch in Telangana or AP? We provide reliable registration services for startups and entrepreneurs, guiding you through every step of the legal and financial process.
        </p>
        <a href="#contact" className="btn-outline" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}>View Startup Packages</a>
      </section>

      {/* Regional Presence */}
      <section id="regions" style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Our Strategic Presence</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {locations.map((loc, i) => (
              <span key={i} style={{ padding: '0.5rem 1.5rem', background: '#f1f5f9', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contact" className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: 'var(--radius-sm)' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>Elevate your business compliance.</h2>
          <p style={{ marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
            Direct access to our senior consultancy team via WhatsApp for immediate support.
          </p>
          <a href="https://wa.me/917780749434" className="btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', background: 'white', color: 'var(--color-accent)' }}>Message on WhatsApp</a>
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
