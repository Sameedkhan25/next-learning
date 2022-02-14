import { useRouter } from 'next/router'
import React from 'react'
//this component is used for all the routes that contains "docs"
//for example: /docs/feature/featureOne or /docs/feature/featureTwo/example/beta/abc

//usefull for documentation site



const Docs = () => {
  const router=useRouter()
  
  const {params=[]}=router.query //params shows all the paths in the route
  //http://localhost:3000/docs/hello/world2/3/abc
//  0: "hello"
// 1: "world2"
// 2: "3"
// 3: "abc" 
  console.log(params)
  if(params[0]=="feature"){
   return  <h1>show feature page </h1>
  }
  return (
    //can do conditional rendering here
   
    <div>document homepage</div>
  )
}

export default Docs

// use double brackets to catch /docs