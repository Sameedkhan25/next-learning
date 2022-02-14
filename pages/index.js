
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  
  return (
    <div className={styles.container}>
     <h1> home page </h1>
     <Link href='/feature' replace>
        <a>feature</a>
     </Link>
    </div>
  )
}
//replace: on back button, it will replace the current page with the homepage not the previous page