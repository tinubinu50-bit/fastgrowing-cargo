export default function Careers() {
  return (
    <>
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: 'url(/images/dubai-truck.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.6) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#8B9FE8', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ color: '#8B9FE8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Join the Team</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05', color: 'white' }}>
            Careers at<br /><span style={{ color: '#8B9FE8' }}>Fast Growing Cargo Transport LLC</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

          {/* No vacancy banner */}
          <div style={{
            background: '#1A1232', borderRadius: '8px', padding: '32px 40px',
            marginBottom: '48px', borderLeft: '4px solid #8B9FE8',
            display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'left'
          }}>
            <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📋</div>
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: '700', color: '#8B9FE8', textTransform: 'uppercase', marginBottom: '6px' }}>No Vacancies at the Moment</div>
              <p style={{ color: '#b0c4de', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We currently don't have any open positions. However, we're always growing — check back soon or submit your details below to be considered for future opportunities.
              </p>
            </div>
          </div>

          {/* Locked form with overlay */}
          <div style={{ position: 'relative' }}>
            {/* Lock overlay */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 10,
              background: 'rgba(10,22,40,0.82)',
              borderRadius: '8px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '12px',
              backdropFilter: 'blur(3px)'
            }}>
              <div style={{ fontSize: '3rem' }}>🔒</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.6rem', fontWeight: '700', color: 'white', textTransform: 'uppercase' }}>Applications Closed</div>
              <div style={{ color: '#8B9FE8', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>No Vacancies Available</div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', maxWidth: '320px', textAlign: 'center', lineHeight: '1.6' }}>
                Applications will open when new positions become available. Follow us for updates.
              </p>
            </div>

            {/* Blurred form underneath */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'left', filter: 'blur(2px)', pointerEvents: 'none', userSelect: 'none' }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: '#1A1232', textTransform: 'uppercase', marginBottom: '8px' }}>Express Your Interest</h3>
              <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '28px' }}>Submit your CV and we'll keep it on file for future openings.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Full Name *</label>
                  <input disabled placeholder="Your full name" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Phone Number *</label>
                  <input disabled placeholder="+971 XX XXX XXXX" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }} />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Email Address *</label>
                <input disabled placeholder="your@email.com" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Position of Interest</label>
                <select disabled style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', background: 'white' }}>
                  <option>Select a role...</option>
                </select>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Message / Cover Note</label>
                <textarea disabled rows={4} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem' }} />
              </div>
              <button disabled style={{ background: '#1A1232', color: 'white', padding: '12px 32px', borderRadius: '4px', border: 'none', fontWeight: '700', fontSize: '1rem', width: '100%' }}>Submit Application</button>
            </div>
          </div>

          <p style={{ marginTop: '32px', color: '#888', fontSize: '0.9rem' }}>
            Want to reach out directly? Email us at{' '}
            <a href="mailto:info@fastgrowingcargo.ae" style={{ color: '#8B9FE8', textDecoration: 'none' }}>info@fastgrowingcargo.ae</a>
          </p>
        </div>
      </section>
    </>
  )
}
