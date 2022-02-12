/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

const reviewPage = () => {
    const router= useRouter()
    console.log(router.query)
    const { reviewId,itemId } = router.query
  return (
    <div>reviewPage
        to test the dynamic nested routing in nextjs
         <h1>itemId id: {itemId}</h1>
        <h1>review id: {reviewId}</h1>
  
    </div>
   
  )
}

export default reviewPage