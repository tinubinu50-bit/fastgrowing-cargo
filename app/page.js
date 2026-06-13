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
              Full-fledged logistics and transport with a diverse fleet and 10+ years of experience. From 1-ton pickups to 100-ton heavy loads — we deliver.
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
{/* STATS */}
      <section style={{ background: '#00AEEF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '28px 16px', textAlign: 'center', borderRight: i % 2 === 0 ? '1px solid rgba(10,22,40,0.15)' : 'none', borderBottom: i < 2 ? '1px solid rgba(10,22,40,0.15)' : 'none' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#0A1628', lineHeight: '1' }}>{s.number}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#0d2040', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width: 640px) {
            .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          }
        `}</style>
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

      {/* WHY US — with image */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0A1628' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/truck-sunset.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.12, zIndex: 0
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '96px 24px' }}>
          <div style={{ marginBottom: '56px' }}>
            <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Why Choose Us</div>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>Built on Trust.<br />Driven by Results.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { icon: '🎯', title: 'Dedicated Fleet', desc: 'Assigned vehicles for consistent service quality — no sharing, no delays.' },
              { icon: '📈', title: 'Scalable Capacity', desc: 'We ramp up fast during peak seasons to match your demand.' },
              { icon: '💰', title: 'Cost Efficient', desc: 'Optimized routing keeps your per-shipment costs low.' },
              { icon: '⭐', title: 'Proven Track Record', desc: '10+ years handling high-volume transport across the UAE.' },
            ].map((item, i) => (
              <WhyCard key={i} {...item} />
            ))}
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