import { useRouter } from 'next/router'
import React from 'react'

const itemDetails = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
 
    const { itemId } = router.query
  return (
    <div>itemDetails
        <h1>item id: {itemId}</h1>
    </div>
  )
}

export default itemDetails