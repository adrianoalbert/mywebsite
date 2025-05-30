import { getContentByType } from '@/lib/markdown'

export default async function AboutPage() {
  const about = await getContentByType('about')
  const content = about[0] // Get the first (and only) about file

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      backgroundImage: 'url(/bg-tech-2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}></div>
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          fontSize: '36px',
          fontWeight: 'bold'
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          About Me
        </div>
        <div 
          style={{
            fontSize: '24px',
            lineHeight: '1.8',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '40px',
            borderRadius: '8px'
          }}
          dangerouslySetInnerHTML={{ __html: content.content }} 
        />
      </div>
    </div>
  )
} 