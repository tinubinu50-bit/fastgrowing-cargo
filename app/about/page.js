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
      <section style={{ padding: '120px 24px', background: '#0A1628' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '80px',
      alignItems: 'start'
    }}>
      
      {/* Left Column: Core Intent */}
      <div>
        <div style={{ 
          color: '#00AEEF', 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          letterSpacing: '4px', 
          textTransform: 'uppercase', 
          marginBottom: '16px' 
        }}>
          What Drives Us
        </div>
        <h2 style={{ 
          fontFamily: 'Barlow Condensed, sans-serif', 
          fontSize: '3.5rem', 
          lineHeight: '1.1',
          fontWeight: '800', 
          textTransform: 'uppercase', 
          color: 'white',
          margin: 0
        }}>
          Our Core<br />Commitment.
        </h2>
      </div>

      {/* Right Column: Grounded Values List */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '40px' 
      }}>
        {[
          { 
            title: 'Fleet Reliability', 
            desc: 'We operate our own trucks and employ trained drivers full-time. This eliminates middleman dependency and guarantees consistent service across your regular lanes.',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
              </svg>
            )
          },
          { 
            title: 'On-Time Execution', 
            desc: 'Logistics depends on precise timing. Our dispatch teams actively track routes and coordinate warehouse turnarounds to prevent delays at delivery points.',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            )
          },
          { 
            title: 'Direct Account Handling', 
            desc: 'No confusing call centers. You work directly with assigned transport coordinators who know your routes, pricing, and operational demands.',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            )
          }
        ].map((item, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            gap: '24px', 
            alignItems: 'start' 
          }}>
            <div style={{ 
              background: 'rgba(0, 174, 239, 0.1)', 
              padding: '12px', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {item.icon}
            </div>
            <div>
              <h3 style={{ 
                fontFamily: 'Barlow Condensed, sans-serif', 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: 'white', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px',
                margin: '0 0 8px 0' 
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#94A3B8', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

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
