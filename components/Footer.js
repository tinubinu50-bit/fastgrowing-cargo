import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1628', color: '#ccc', paddingTop: '48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.3rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>REAL TIMES CARGO<br/>TRANSPORT LLC</div>
          <div style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#aaa' }}>Full-fledged logistics & transport in Dubai, UAE. 10+ years of experience.</div>
          <div style={{ marginTop: '16px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a href="tel:00971555897779" style={{ color: '#00AEEF', textDecoration: 'none' }}>📞 00971 – 555897779</a>
            <a href="mailto:info@realtimestc.ae" style={{ color: '#00AEEF', textDecoration: 'none' }}>✉️ info@realtimestc.ae</a>
          </div>
        </div>

        <div>
          <div style={{ color: '#00AEEF', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</div>
          {['/', '/about', '/services', '/careers', '/contact'].map((href, i) => (
            <div key={href} style={{ marginBottom: '8px' }}>
              <Link href={href} style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>→ {['Home', 'About Us', 'Our Services', 'Careers', 'Contact'][i]}</Link>
            </div>
          ))}
        </div>

        <div>
          <div style={{ color: '#00AEEF', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Services</div>
          {['Linehaul Transport', 'Chiller & Reefer', 'Flatbed & Heavy Load', 'Closed Box Delivery', 'Furniture & Appliances', '24/7 Operations'].map(s => (
            <div key={s} style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '8px' }}>→ {s}</div>
          ))}
        </div>

        <div>
          <div style={{ color: '#00AEEF', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Location</div>
          <div style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.7' }}>Dubai, United Arab Emirates</div>
          <a href="https://www.realtimestc.com" style={{ color: '#00AEEF', fontSize: '0.9rem', display: 'block', marginTop: '12px' }}>www.realtimestc.com</a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1A3A6B', padding: '16px 24px', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
        © {new Date().getFullYear()} Real Times Cargo Transport LLC. All rights reserved. Dubai, UAE.
      </div>
    </footer>
  )
}
