'use client'
import { useState } from 'react'
import Link from 'next/link'

const fleet = [
  { name: '1 Ton Truck', capacity: '1 TON', category: 'Light', desc: 'Perfect for small deliveries and urban logistics.' },
  { name: '3 Ton Truck', capacity: '3 TON', category: 'Light', desc: 'Ideal for retail and SME deliveries.' },
  { name: '7 Ton Truck', capacity: '7 TON', category: 'Medium', desc: 'Mid-range capacity for regular commercial deliveries.' },
  { name: '10 Ton Truck', capacity: '10 TON', category: 'Medium', desc: 'High-volume urban and inter-city deliveries.' },
  { name: '3 Ton Chiller', capacity: '3 TON', category: 'Reefer', desc: 'Temperature-controlled for perishable goods.' },
  { name: '10 Ton Chiller', capacity: '10 TON', category: 'Reefer', desc: 'Bulk cold chain transport across the UAE.' },
  { name: '12M Flatbed', capacity: '22 TON', category: 'Flatbed', desc: 'Open platform for construction and industrial cargo.' },
  { name: '13.6M Flatbed', capacity: '25 TON', category: 'Flatbed', desc: 'Extended flatbed for long or wide loads.' },
  { name: '15M Flatbed', capacity: '30 TON', category: 'Flatbed', desc: 'Maximum flatbed capacity for heavy freight.' },
  { name: '13.6M Curtain Side', capacity: '25 TON', category: 'Curtain', desc: 'Side-loading for faster warehouse operations.' },
  { name: '15M Curtain Side', capacity: '25 TON', category: 'Curtain', desc: 'Full-length curtain side for bulk goods.' },
  { name: '13.6M Side Grill', capacity: '26 TON', category: 'Side Grill', desc: 'Ventilated sides for agriculture and loose cargo.' },
  { name: '15M Side Grill', capacity: '25 TON', category: 'Side Grill', desc: 'Large ventilated transport for bulk goods.' },
  { name: '13.6M Closed Box', capacity: '30 TON', category: 'Closed Box', desc: 'Fully enclosed for secure, protected cargo.' },
  { name: '15M Closed Box', capacity: '25 TON', category: 'Closed Box', desc: 'Maximum-size enclosed transport.' },
  { name: 'Hydraulic Low Bed', capacity: '100 TON', category: 'Heavy', desc: 'For extreme heavy haul — machinery and equipment.' },
  { name: 'Low Bed', capacity: '40 TON', category: 'Heavy', desc: 'Heavy construction and industrial transport.' },
  { name: 'Crane Truck', capacity: 'Variable', category: 'Crane', desc: 'On-board crane for loading/unloading on site.' },
]

const categoryColors = {
  'Light': '#00AEEF', 'Medium': '#1A3A6B', 'Reefer': '#0891b2',
  'Flatbed': '#0A1628', 'Curtain': '#1e40af', 'Side Grill': '#1d4ed8',
  'Closed Box': '#1e3a5f', 'Heavy': '#dc2626', 'Crane': '#d97706',
}

const categories = ['All', ...Object.keys(categoryColors)]

const serviceImages = [
  { img: '/images/truck-road.jpg', title: 'Linehaul Operations', desc: 'Cost-effective, optimized long-distance transport between warehouses and distribution centers across the UAE.' },
  { img: '/images/warehouse.jpg', title: 'Bulk Deliveries', desc: 'High-volume cargo handling with the right vehicle for every load size — from 1 ton to 100 tons.' },
  { img: '/images/fleet-aerial.jpg', title: 'Fleet Management', desc: 'Scalable, dedicated fleet deployment to match your operational peaks and regular needs.' },
  { img: '/images/delivery.jpg', title: 'Last Mile & Furniture', desc: 'Delivery and installation of TVs, refrigerators, washing machines, and household goods.' },
  { img: '/images/dubai-road.jpg', title: 'Urban Logistics', desc: 'Fast, reliable deliveries across Dubai\'s urban network, navigated by experienced drivers.' },
  { img: '/images/dubai-truck.jpg', title: 'Heavy Industrial', desc: 'Hydraulic low beds and crane trucks for machinery, equipment, and oversized industrial loads.' },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? fleet : fleet.filter(v => v.category === activeFilter)

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: 'url(/images/fleet-aerial.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.55) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#00AEEF', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Offer</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05', color: 'white' }}>
            Our Fleet &<br /><span style={{ color: '#00AEEF' }}>Services</span>
          </h1>
          <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '480px' }}>18+ vehicle types, operating 24/7 across the UAE.</p>
        </div>
      </section>

      {/* SERVICE CARDS WITH IMAGES */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Core Operations</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '48px' }}>What We Specialize In</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {serviceImages.map((s, i) => (
              <ServiceImageCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* FLEET with filter */}
      <section style={{ padding: '96px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Vehicles</div>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.4rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '32px' }}>Full Fleet Overview</h2>

          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                padding: '8px 18px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                background: activeFilter === cat ? '#0A1628' : 'white',
                color: activeFilter === cat ? 'white' : '#555',
                fontWeight: '600', fontSize: '0.85rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.2s',
                borderBottom: activeFilter === cat ? '2px solid #00AEEF' : '2px solid transparent'
              }}>{cat}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {filtered.map((v, i) => (
              <FleetCard key={i} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0A1628', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2.8rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', marginBottom: '16px' }}>Need a Specific Vehicle?</h2>
          <p style={{ color: '#b0c4de', fontSize: '1rem', marginBottom: '32px' }}>Tell us your cargo requirements and we'll match you with the right fleet solution.</p>
          <Link href="/contact" style={{ background: '#00AEEF', color: '#0A1628', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '1rem' }}>Request a Quote</Link>
        </div>
      </section>
    </>
  )
}

function ServiceImageCard({ img, title, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.15)' : '0 4px 16px rgba(0,0,0,0.08)', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', cursor: 'pointer' }}>
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,174,239,0.2)' : 'rgba(10,22,40,0.15)', transition: 'background 0.3s' }} />
      </div>
      <div style={{ padding: '24px', background: 'white' }}>
        <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: '700', color: hovered ? '#00AEEF' : '#0A1628', textTransform: 'uppercase', marginBottom: '8px', transition: 'color 0.3s' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{desc}</p>
      </div>
    </div>
  )
}

function FleetCard({ name, capacity, category, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: 'white', borderRadius: '6px', padding: '24px 20px', boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)', borderTop: `3px solid ${categoryColors[category] || '#00AEEF'}`, transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.25s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.2rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase' }}>{name}</h3>
        <span style={{ background: categoryColors[category] || '#00AEEF', color: 'white', fontSize: '0.7rem', fontWeight: '700', padding: '3px 8px', borderRadius: '3px', whiteSpace: 'nowrap', marginLeft: '8px' }}>{category}</span>
      </div>
      <div style={{ fontSize: '0.85rem', color: '#00AEEF', fontWeight: '700', marginBottom: '8px' }}>Capacity: {capacity}</div>
      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>{desc}</p>
    </div>
  )
}
