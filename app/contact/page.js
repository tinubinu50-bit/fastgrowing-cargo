export default function Contact() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1A3A6B 100%)', color: 'white', padding: '80px 24px', borderBottom: '4px solid #00AEEF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05' }}>Contact<br /><span style={{ color: '#00AEEF' }}>Real Times Cargo</span></h1>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '32px' }}>Reach Out to Us</h2>
            {[
              { icon: '📞', label: 'Phone', value: '00971 – 555897779', href: 'tel:00971555897779' },
              { icon: '✉️', label: 'Email', value: 'info@realtimestc.ae', href: 'mailto:info@realtimestc.ae' },
              { icon: '🌐', label: 'Website', value: 'www.realtimestc.com', href: 'https://www.realtimestc.com' },
              { icon: '📍', label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: '#0A1628', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#00AEEF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ color: '#0A1628', fontSize: '1rem', textDecoration: 'none', fontWeight: '500' }}>{c.value}</a>
                  ) : (
                    <span style={{ color: '#0A1628', fontSize: '1rem', fontWeight: '500' }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{ background: '#0A1628', color: 'white', borderRadius: '6px', padding: '20px 24px', marginTop: '16px' }}>
              <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Operating Hours</div>
              <div style={{ fontSize: '1rem', fontWeight: '600' }}>24 Hours / 7 Days a Week</div>
              <div style={{ fontSize: '0.85rem', color: '#b0c4de', marginTop: '4px' }}>We never stop. Neither does your cargo.</div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>Send Us a Message</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '28px' }}>Leave your details and we'll get back to you shortly.</p>

            <form action="mailto:info@realtimestc.ae" method="post" encType="text/plain">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Full Name *</label>
                  <input name="name" required placeholder="Your name" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Company</label>
                  <input name="company" placeholder="Your company" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }} />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Phone Number *</label>
                <input name="phone" required placeholder="+971 XX XXX XXXX" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Email Address</label>
                <input name="email" type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Service Required</label>
                <select name="service" style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', background: 'white' }}>
                  <option value="">Select a service...</option>
                  <option>Linehaul Transport</option>
                  <option>Chiller / Reefer</option>
                  <option>Flatbed / Heavy Load</option>
                  <option>Closed Box Delivery</option>
                  <option>Furniture & Appliances</option>
                  <option>Crane Truck</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }}>Message *</label>
                <textarea name="message" required rows={4} placeholder="Tell us about your transport requirements..." style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <button type="submit" style={{ background: '#00AEEF', color: '#0A1628', padding: '12px 32px', borderRadius: '4px', border: 'none', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div style={{ maxWidth: '1200px', margin: '48px auto 0' }}>
          <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.234!2d55.3105452!3d25.278381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4313bd9b22a9%3A0x64ee43837988f376!2sReal%20Times%20Cargo%20Transport%20LLC!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
