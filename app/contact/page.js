'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('contact_submissions').insert([form])
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' })
    }
    setLoading(false)
  }

  const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', fontFamily: 'Inter, sans-serif' }
  const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#333', marginBottom: '6px' }

  return (
    <>
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10%', backgroundImage: 'url(/images/delivery.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.6) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#00AEEF', zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.05', color: 'white' }}>
            Contact<br /><span style={{ color: '#00AEEF' }}>Real Times Cargo</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

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
                  {c.href
                    ? <a href={c.href} style={{ color: '#0A1628', fontSize: '1rem', textDecoration: 'none', fontWeight: '500' }}>{c.value}</a>
                    : <span style={{ color: '#0A1628', fontSize: '1rem', fontWeight: '500' }}>{c.value}</span>
                  }
                </div>
              </div>
            ))}
            <div style={{ background: '#0A1628', color: 'white', borderRadius: '6px', padding: '20px 24px', marginTop: '16px' }}>
              <div style={{ color: '#00AEEF', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Operating Hours</div>
              <div style={{ fontSize: '1rem', fontWeight: '600' }}>24 Hours / 7 Days a Week</div>
              <div style={{ fontSize: '0.85rem', color: '#b0c4de', marginTop: '4px' }}>We never stop. Neither does your cargo.</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '8px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>Send Us a Message</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '28px' }}>Leave your details and we'll get back to you shortly.</p>

            {status === 'success' && (
              <div style={{ background: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: '6px', padding: '16px', marginBottom: '24px', color: '#065f46', fontSize: '0.9rem', fontWeight: '600' }}>
                ✅ Message sent! We'll get back to you shortly.
              </div>
            )}
            {status === 'error' && (
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '6px', padding: '16px', marginBottom: '24px', color: '#991b1b', fontSize: '0.9rem', fontWeight: '600' }}>
                ❌ Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Phone Number *</label>
                <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Service Required</label>
                <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
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
                <label style={labelStyle}>Message *</label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your transport requirements..." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ background: loading ? '#aaa' : '#00AEEF', color: '#0A1628', padding: '14px 32px', borderRadius: '4px', border: 'none', fontWeight: '700', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', width: '100%' }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '48px auto 0' }}>
          <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.234!2d55.3105452!3d25.278381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4313bd9b22a9%3A0x64ee43837988f376!2sReal%20Times%20Cargo%20Transport%20LLC!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
              width="100%" height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
