import Link from 'next/link'
import { getContentByType } from '@/lib/markdown'
import styles from '../styles/Card.module.css'

export default async function CoursesPage() {
  const courses = await getContentByType('courses')

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="52" 
            height="52" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.headerIcon}
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
          Courses
        </div>
        <div className={styles.grid}>
          {courses.map((course) => (
            <Link 
              key={course.slug} 
              href={`/courses/${course.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={styles.card}>
                <h2 className={styles.title}>{course.title}</h2>
                <p className={styles.date}>{new Date(course.date).toLocaleDateString()}</p>
                {course.tags && course.tags.length > 0 && (
                  <div className={styles.tags}>
                    {course.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div style={{ marginTop: 'auto' }}>
                  <span className={styles.button}>
                    View Details
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
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 