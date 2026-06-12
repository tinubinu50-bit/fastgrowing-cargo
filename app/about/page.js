import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: '-10%',
          backgroundImage: 'url(/images/truck-road.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          zIndex: 0
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.6) 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#00AEEF', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Who We Are</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05', color: 'white' }}>
            About Real Times<br /><span style={{ color: '#00AEEF' }}>Cargo Transport</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Story</div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '24px' }}>10+ Years Moving Dubai</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>
              Real Times Cargo Transport LLC was built on a simple promise: show up on time, every time. Founded in Dubai with a deep understanding of the UAE logistics landscape, we've grown from a small fleet into a full-fledged transport operation trusted by businesses across the region.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#444', marginBottom: '32px' }}>
              From warehouse-to-warehouse linehaul to heavy industrial loads, our team brings experience, reliability, and a dedication to getting cargo where it needs to go — safely and on schedule.
            </p>
            <Link href="/contact" style={{ background: '#00AEEF', color: '#0A1628', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem' }}>Work With Us →</Link>
          </div>

          {/* Image with overlay effect */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}>
              <img src="\images\dubai-road.jpg" alt="Dubai logistics" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: '-24px', left: '-24px',
              background: '#0A1628', color: 'white', borderRadius: '6px',
              padding: '20px 28px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              borderLeft: '4px solid #00AEEF'
            }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#00AEEF', lineHeight: '1' }}>10+</div>
              <div style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Years in Dubai</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#F5F7FA', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '24/7', label: 'Operations' },
            { number: '20+', label: 'Fleet Types' },
            { number: '50T+', label: 'Max Load Capacity' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '6px', padding: '32px 20px', textAlign: 'center', borderTop: '3px solid #00AEEF', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.5rem', fontWeight: '700', color: '#0A1628' }}>{s.number}</div>
              <div style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '96px 24px', background: '#0A1628' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>What Drives Us</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', marginBottom: '48px' }}>Our Mission & Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To provide dedicated, scalable, and cost-effective transportation solutions that support our clients\' growing operational needs across the UAE.' },
              { icon: '⏰', title: 'On-Time Delivery', desc: 'Time is money in logistics. We operate 24/7 and optimize every route to ensure your cargo arrives when expected.' },
              { icon: '🤝', title: 'Partnership First', desc: 'We don\'t just move cargo — we build long-term partnerships. Your growth is our growth.' },
              { icon: '🔒', title: 'Reliability', desc: 'Dedicated fleet, trained personnel, and proven processes mean you can depend on us every single time.' },
            ].map((v, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,174,239,0.2)', borderRadius: '8px', padding: '32px 24px', borderBottom: '3px solid #00AEEF' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.3rem', fontWeight: '700', color: '#00AEEF', textTransform: 'uppercase', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#b0c4de', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding: '96px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Find Us</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '32px' }}>Our Office</h2>
          <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.234!2d55.3105452!3d25.278381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4313bd9b22a9%3A0x64ee43837988f376!2sReal%20Times%20Cargo%20Transport%20LLC!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
              width="100%" height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ marginTop: '28px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '0.95rem', color: '#444' }}>📍 <strong>Dubai, United Arab Emirates</strong></div>
            <div><a href="tel:00971555897779" style={{ color: '#00AEEF', textDecoration: 'none', fontSize: '0.95rem' }}>📞 00971 – 555897779</a></div>
            <div><a href="mailto:info@realtimestc.ae" style={{ color: '#00AEEF', textDecoration: 'none', fontSize: '0.95rem' }}>✉️ info@realtimestc.ae</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
