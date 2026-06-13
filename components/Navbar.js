'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{ background: '#0A1628', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/logo.png" alt="Real Times Cargo" style={{ height: '52px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen' }} />
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.5px', lineHeight: '1.1' }}>REAL TIMES CARGO</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#00AEEF', letterSpacing: '1px', textTransform: 'uppercase' }}>Transport LLC</div>
            </div>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ color: path === l.href ? '#00AEEF' : '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', padding: '6px 14px', borderBottom: path === l.href ? '2px solid #00AEEF' : '2px solid transparent', transition: 'color 0.2s' }}>{l.label}</Link>
          ))}
          <a href="tel:00971555897779" style={{ background: '#00AEEF', color: '#0A1628', padding: '8px 18px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '700', textDecoration: 'none', marginLeft: '12px' }}>📞 Call Us</a>
        </div>

        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }} className="burger">☰</button>
      </div>

      {open && (
        <div style={{ background: '#0d1f3c', padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: path === l.href ? '#00AEEF' : '#ccc', textDecoration: 'none', padding: '10px 0', fontSize: '1rem', borderBottom: '1px solid #1a3a6b' }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
