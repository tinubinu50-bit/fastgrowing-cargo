'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const stats = [
  { number: '10+', label: 'Years in Dubai' },
  { number: '24/7', label: 'Operations' },
  { number: '20+', label: 'Vehicle Types' },
  { number: '50T+', label: 'Max Load Capacity' },
]

const services = [
  { img: '/images/truck-sunset.jpg', title: 'Linehaul Transport', desc: 'Long-distance, warehouse-to-warehouse delivery across the UAE with optimized routing.' },
  { img: '/images/warehouse.jpg', title: 'Bulk & Warehouse', desc: 'High-volume cargo handling with the right vehicle for every load size.' },
  { img: '/images/fleet-aerial.jpg', title: 'Fleet Deployment', desc: 'Scalable fleet assigned to your operations during peak and regular seasons.' },
  { img: '/images/delivery.jpg', title: 'Last Mile Delivery', desc: 'Reliable last-mile delivery for retail, e-commerce and household goods.' },
  { img: '/images/dubai-road.jpg', title: 'Urban Logistics', desc: 'Navigating Dubai\'s roads efficiently for time-sensitive urban deliveries.' },
  { img: '/images/dubai-truck.jpg', title: 'Heavy & Bulk', desc: 'Low beds and hydraulic trucks up to 100 TON for oversized industrial loads.' },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* HERO with parallax */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Parallax background */}
        <div style={{
          position: 'absolute',
          inset: '-20%',
          backgroundImage: 'url(/images/truck-sunset.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s linear',
          zIndex: 0,
        }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.7) 60%, rgba(10,22,40,0.3) 100%)',
          zIndex: 1
        }} />
        {/* Cyan bottom line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#00AEEF', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ color: '#00AEEF', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '32px', height: '2px', background: '#00AEEF' }} />
              REAL TIMES CARGO TRANSPORT
            </div>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: '700',
              lineHeight: '1.0',
              textTransform: 'uppercase',
              color: 'white',
              marginBottom: '24px',
            }}>
              Moving UAE<br />
              <span style={{ color: '#00AEEF', WebkitTextStroke: '1px #00AEEF' }}>Forward.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', maxWidth: '500px' }}>
              We handle commercial haulage, site deliveries, and distribution contracts across Dubai and all over Emirates. With a fleet ranging from 1-ton pickups to 100-ton low beds, we move your cargo safely and on time.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: '#00AEEF', color: '#0A1628', fontWeight: '700',
                padding: '16px 36px', borderRadius: '4px', textDecoration: 'none',
                fontSize: '1rem', letterSpacing: '0.5px',
                boxShadow: '0 4px 24px rgba(0,174,239,0.35)',
                transition: 'all 0.2s'
              }}>Get a Quote →</Link>
              <Link href="/services" style={{
                border: '2px solid rgba(255,255,255,0.4)', color: 'white',
                padding: '14px 28px', borderRadius: '4px', textDecoration: 'none',
                fontSize: '1rem', fontWeight: '600', backdropFilter: 'blur(4px)',
                background: 'rgba(255,255,255,0.08)'
              }}>View Our Fleet</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</div>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(0,174,239,0.8), transparent)' }} />
        </div>
      </section>
{/* Stat Layout */}
<section style={{ background: '#0A1628', padding: '120px 24px' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '64px',
      alignItems: 'center'
    }}>
      
      {/* Left Side: Contextual Intro */}
      <div>
        <div style={{ 
          color: '#00AEEF', 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          letterSpacing: '4px', 
          textTransform: 'uppercase', 
          marginBottom: '16px' 
        }}>
          Fleet Capability
        </div>
        
        <h2 style={{ 
          fontFamily: 'Barlow Condensed, sans-serif', 
          fontSize: '3rem', 
          lineHeight: '1.1',
          fontWeight: '800', 
          textTransform: 'uppercase', 
          color: 'white',
          marginBottom: '24px'
        }}>
          Direct Transport Solutions Across the UAE
        </h2>
        
        <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
          Real Times Cargo Transport LLC manages daily supply chain runs, warehouse movements, and heavy equipment transfers. Our dispatch desk operates around the clock to coordinate asset management, port clearances, and scheduled site drops without relying on third-party brokers.
        </p>
      </div>

      {/* Right Side: Asymmetrical Stat Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '24px' 
      }}>
        {[
          { value: '10+', label: 'Years on the Road', detail: 'Serving Dubai logistics since day one' },
          { value: '24/7', label: 'Dispatch Desk', detail: 'Constant tracking and active route updates' },
          { value: '20+', label: 'Vehicle Configurations', detail: 'From 1-ton city pickups to flatbeds' },
          { value: '100T', label: 'Maximum Capacity', detail: 'Low beds engineered for oversized industrial loads' }
        ].map((stat, i) => (
          <div key={i} style={{ 
            background: '#0D1E36', 
            padding: '32px 24px', 
            borderRadius: '4px',
            borderTop: i < 2 ? '3px solid #00AEEF' : '3px solid transparent',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{ 
              fontFamily: 'Barlow Condensed, sans-serif', 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              color: 'white',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              {stat.value}
            </div>
            <div style={{ 
              color: '#00AEEF', 
              fontSize: '0.95rem', 
              fontWeight: '700', 
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '6px'
            }}>
              {stat.label}
            </div>
            <div style={{ 
              color: '#64748B', 
              fontSize: '0.85rem', 
              lineHeight: '1.4' 
            }}>
              {stat.detail}
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* SERVICES */}
      <section style={{ padding: '96px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#00AEEF' }} />
              What We Do
            </div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.8rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase' }}>Our Services</h2>
            <p style={{ fontSize: '1rem', color: '#666', marginTop: '10px', maxWidth: '500px' }}>A complete range of transport solutions for every business need across the UAE.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link href="/services" style={{ background: '#0A1628', color: 'white', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', letterSpacing: '0.5px' }}>View Full Fleet & Services</Link>
          </div>
        </div>
      </section>

   {/* WHY US */}
<section style={{ position: 'relative', overflow: 'hidden', background: '#0A1628' }}>
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'url(/images/truck-sunset.jpg)',
    backgroundSize: 'cover', backgroundPosition: 'center',
    opacity: 0.08, zIndex: 0
  }} />
  
  <div style={{ 
    position: 'relative', 
    zIndex: 1, 
    maxWidth: '1280px', 
    margin: '0 auto', 
    padding: '120px 32px' 
  }}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '64px',
      alignItems: 'start'
    }}>
      
      {/* Left Column: Core Heading */}
      <div style={{ position: 'sticky', top: '40px' }}>
        <div style={{ 
          color: '#00AEEF', 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          letterSpacing: '4px', 
          textTransform: 'uppercase', 
          marginBottom: '16px' 
        }}>
          Why Choose Us
        </div>
        <h2 style={{ 
          fontFamily: 'Barlow Condensed, sans-serif', 
          fontSize: '4rem', 
          lineHeight: '1.1',
          fontWeight: '800', 
          textTransform: 'uppercase', 
          color: 'white',
          margin: 0
        }}>
          Built on Trust.<br />Driven by Results.
        </h2>
      </div>

      {/* Right Column: Value Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '48px 32px' 
      }}>
        {[
          { 
            title: 'Dedicated Fleet', 
            desc: 'Assigned vehicles ensure consistent service quality with zero sharing or unexpected delays.',
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            )
          },
          { 
            title: 'Scalable Capacity', 
            desc: 'Rapid deployment models allow seamless scaling during peak seasons to match transport demand.',
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            )
          },
          { 
            title: 'Cost Efficient', 
            desc: 'Intelligent routing optimization keeps individual per-shipment costs consistently low.',
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            )
          },
          { 
            title: 'Proven Track Record', 
            desc: 'Over a decade of experience managing high-volume enterprise logistics across the UAE.',
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            )
          },
        ].map((item, i) => (
          <div key={i} style={{
            paddingLeft: '24px',
            borderLeft: '2px solid rgba(0, 174, 239, 0.2)',
          }}>
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </div>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1.25rem', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {item.title}
            </h3>
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '0.95rem', 
              lineHeight: '1.6', 
              margin: 0 
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section style={{ padding: '96px 24px', background: '#00AEEF', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(10,22,40,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(10,22,40,0.06)' }} />
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '3.2rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to Ship?</h2>
          <p style={{ color: '#0d2040', fontSize: '1.1rem', marginBottom: '36px' }}>Get in touch today and let's build a transport solution that works for your business.</p>
          <Link href="/contact" style={{ background: '#0A1628', color: 'white', padding: '16px 48px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>Get in Touch →</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}

function ServiceCard({ img, title, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '6px',
        overflow: 'hidden',
        background: 'white',
        boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.15)' : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'rgba(0,174,239,0.25)' : 'rgba(10,22,40,0.2)',
          transition: 'background 0.3s'
        }} />
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem',
          fontWeight: '700', color: hovered ? '#00AEEF' : '#0A1628',
          textTransform: 'uppercase', marginBottom: '8px',
          transition: 'color 0.3s'
        }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{desc}</p>
        <div style={{
          marginTop: '16px', color: '#00AEEF', fontSize: '0.85rem',
          fontWeight: '700', letterSpacing: '1px',
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 0.3s'
        }}>LEARN MORE →</div>
      </div>
    </div>
  )
}

function WhyCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderLeft: `3px solid ${hovered ? '#00AEEF' : 'rgba(0,174,239,0.4)'}`,
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '8px',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'all 0.3s',
        cursor: 'default'
      }}
    >
      <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{icon}</div>
      <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.2rem', fontWeight: '700', color: '#00AEEF', textTransform: 'uppercase', marginBottom: '8px' }}>{title}</h4>
      <p style={{ color: '#b0c4de', fontSize: '0.9rem', lineHeight: '1.6' }}>{desc}</p>
    </div>
  )
}
