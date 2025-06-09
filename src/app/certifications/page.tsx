import Link from 'next/link'
import Image from 'next/image'
import { getContentByType } from '@/lib/markdown'
import styles from '../styles/Card.module.css'

export default async function CertificationsPage() {
  const certifications = await getContentByType('certifications')

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
            <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
          </svg>
          Certifications
        </div>
        <div className={styles.grid}>
          {certifications.map((cert) => (
            <div key={cert.slug} className={styles.card}>
              {cert.image && (
                <div className={styles.imageContainer}>
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    width={300}
                    height={200}
                    className={styles.certImage}
                    priority={false}
                  />
                </div>
              )}
              <h2 className={styles.title}>{cert.title}</h2>
              <div className={styles.dateInfo}>
                {cert.issued && (
                  <p className={styles.date}>
                    <strong>Date issued:</strong> {cert.issued}
                  </p>
                )}
                {cert.expires && (
                  <p className={styles.date}>
                    <strong>Expires:</strong> {cert.expires}
                  </p>
                )}
                {!cert.issued && !cert.expires && cert.date && (
                  <p className={styles.date}>
                    {new Date(cert.date).toLocaleDateString()}
                  </p>
                )}
              </div>
              {/* Skills section commented out - can be restored later if needed
              {(cert.skills && cert.skills.length > 0) ? (
                <div className={styles.tags}>
                  <strong>Skills:</strong>
                  {cert.skills.map((skill) => (
                    <span key={skill} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (cert.tags && cert.tags.length > 0) && (
                <div className={styles.tags}>
                  <strong>Skills:</strong>
                  {cert.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              */}
              {cert.badge && (
                <Link 
                  href={cert.badge}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Show Credentials
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
          ))}
        </div>
      </div>
    </div>
  )
} 