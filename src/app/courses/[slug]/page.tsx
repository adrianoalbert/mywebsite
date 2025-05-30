import { getContentByType, getContentBySlug } from '@/lib/markdown'
import Link from 'next/link'

export async function generateStaticParams() {
  const courses = await getContentByType('courses')
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = await getContentBySlug('courses', slug)
  
  if (!course) {
    return <div>Course not found</div>
  }

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
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))'
      }}></div>
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
          padding: '40px',
          marginTop: '20px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>{course.title}</h1>
          
          <p style={{
            color: '#ccc',
            marginBottom: '30px',
            fontSize: '18px'
          }}>
            {new Date(course.date).toLocaleDateString()}
          </p>

          {course.tags && course.tags.length > 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '30px'
            }}>
              {course.tags.map((tag) => (
                <span key={tag} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '16px'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div 
            style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}
            dangerouslySetInnerHTML={{ __html: course.content }} 
          />

          {course.certificate && (
            <Link 
              href={course.certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#4a90e2',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              View Certificate
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 