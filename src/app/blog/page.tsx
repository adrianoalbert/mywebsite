import { getContentByType } from '@/lib/markdown'

export default async function BlogPage() {
  const posts = await getContentByType('blog')

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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <div className="page-header">
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
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <path d="M12 6h4"/>
            <path d="M12 10h4"/>
            <path d="M12 14h4"/>
            <path d="M8 6h.01"/>
            <path d="M8 10h.01"/>
            <path d="M8 14h.01"/>
          </svg>
          Blog
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {posts.map((post) => (
            <div key={post.slug} style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              padding: '20px',
              transition: 'all 0.2s ease-in-out',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>{post.title}</h2>
              <p style={{
                color: '#ccc',
                marginBottom: '15px'
              }}>{new Date(post.date).toLocaleDateString()}</p>
              {post.tags && post.tags.length > 0 && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 'auto' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 