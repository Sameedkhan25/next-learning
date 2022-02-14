
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router= useRouter()
  const handleClick = () => {
    console.log('clicked')
  
    router.push('/feature/featureOne')
  }
  
  return (
    <div className={styles.container}>
     <h1> home page </h1>
     <Link href='/feature' replace>
        <a>feature</a>
     </Link>

      <button onClick={handleClick}>
        go to feature page
      </button>
     
    </div>
  )
    
}
//replace: on back button, it will replace the current page with the homepage not the previous page