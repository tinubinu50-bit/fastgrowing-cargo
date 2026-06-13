'use client'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const phone = '971555897779'
  const message = encodeURIComponent('Hello Real Times Cargo Transport! I would like to inquire about your services.')

  const WaIcon = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )

  return (
    <>
      {dismissed && (
        <button
          onClick={() => { setDismissed(false); setExpanded(false) }}
          style={{
            position: 'fixed', right: 0, bottom: '120px', zIndex: 999,
            background: '#25D366', color: 'white', border: 'none',
            borderRadius: '8px 0 0 8px', padding: '12px 6px',
            cursor: 'pointer', boxShadow: '-2px 2px 12px rgba(0,0,0,0.2)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
          }}
        >
          <WaIcon size={18} />
          <span style={{ fontSize: '0.55rem', fontWeight: '700', letterSpacing: '0.5px', writingMode: 'vertical-rl' }}>CHAT</span>
        </button>
      )}

      {!dismissed && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px'
        }}>
          {expanded && (
            <div style={{
              background: 'white', borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              overflow: 'hidden', width: '280px',
              animation: 'fadeSlideUp 0.25s ease'
            }}>
              <div style={{ background: '#075E54', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WaIcon size={22} />
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem' }}>Real Times Cargo</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Typically replies within an hour</div>
                </div>
                <button
                  onClick={() => setDismissed(true)}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '1.1rem', padding: '4px' }}
                >x</button>
              </div>
              <div style={{ padding: '16px', background: '#ECE5DD' }}>
                <div style={{ background: 'white', borderRadius: '0 8px 8px 8px', padding: '10px 14px', fontSize: '0.85rem', color: '#333', lineHeight: '1.5', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', maxWidth: '85%' }}>
                  Hi! How can we help you with your transport needs today?
                  <div style={{ fontSize: '0.7rem', color: '#999', marginTop: '4px', textAlign: 'right' }}>Real Times Cargo</div>
                </div>
              </div>
              
                href={'https://wa.me/' + phone + '?text=' + message}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', background: '#25D366', color: 'white',
                  textAlign: 'center', padding: '14px', fontWeight: '700',
                  fontSize: '0.9rem', textDecoration: 'none'
                }}
              
                Start Chat on WhatsApp
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: '#25D366', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
              transform: expanded ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s'
            }}
          >
            {expanded
              ? <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700' }}>x</span>
              : <WaIcon size={28} />
            }
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}