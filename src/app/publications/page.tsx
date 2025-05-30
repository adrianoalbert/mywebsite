import { getContentByType } from '@/lib/markdown'

export default async function PublicationsPage() {
  const publications = await getContentByType('publications')
  const content = publications[0] // Get the first (and only) publications file

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
        <div 
          style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '30px',
            borderRadius: '8px'
          }}
          dangerouslySetInnerHTML={{ __html: content.content }} 
        />
      </div>
    </div>
  )
} 