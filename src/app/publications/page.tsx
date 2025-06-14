import { getContentByType } from '@/lib/markdown'
import styles from '../styles/About.module.css'

export default async function PublicationsPage() {
  const publications = await getContentByType('publications')
  const content = publications[0] // Get the first (and only) publications file

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span style={{ fontSize: '40px' }}>📚</span>
          Publications
        </div>
        <div 
          className={styles.textContent}
          dangerouslySetInnerHTML={{ __html: content.content }} 
        />
      </div>
    </div>
  )
} 