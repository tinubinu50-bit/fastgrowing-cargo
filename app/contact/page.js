export default function Contact() {
  return (
    <>
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: 'url(/images/delivery.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,18,50,0.95) 0%, rgba(26,18,50,0.6) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#8B9FE8', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ color: '#8B9FE8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05', color: 'white' }}>
            Contact<br /><span style={{ color: '#8B9FE8' }}>Fast Growing Cargo</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#F7F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

          <div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#1A1232', textTransform: 'uppercase', marginBottom: '32px' }}>Reach Out to Us</h2>
            {[
              { icon: '📞', label: 'Phone', value: '00971 – 555897779', href: 'tel:00971555897779' },
              { icon: '✉️', label: 'Email', value: 'info@fastgrowingcargo.ae', href: 'mailto:info@fastgrowingcargo.ae' },
              { icon: '📍', label: 'Location', value: 'Abu Dhabi, United Arab Emirates', href: null },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: '#1A1232', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#8B9FE8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ color: '#1A1232', fontSize: '1rem', textDecoration: 'none', fontWeight: '500' }}>{c.value}</a>
                    : <span style={{ color: '#1A1232', fontSize: '1rem', fontWeight: '500' }}>{c.value}</span>
                  }
                </div>
              </div>
            ))}
            <div style={{ background: '#1A1232', color: 'white', borderRadius: '6px', padding: '20px 24px', marginTop: '16px' }}>
              <div style={{ color: '#8B9FE8', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Operating Hours</div>
              <div style={{ fontSize: '1rem', fontWeight: '600' }}>24 Hours / 7 Days a Week</div>
              <div style={{ fontSize: '0.85rem', color: '#c9c5e0', marginTop: '4px' }}>We never stop. Neither does your cargo.</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '8px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: '#1A1232', textTransform: 'uppercase', marginBottom: '8px' }}>Send Us a Message</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '28px' }}>Leave your details and we'll get back to you shortly.</p>

            <form action="mailto:info@fastgrowingcargo.ae" method="post" encType="text/plain">
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
              <button type="submit" style={{ background: '#8B9FE8', color: '#1A1232', padding: '14px 32px', borderRadius: '4px', border: 'none', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
