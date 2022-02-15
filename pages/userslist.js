// https://jsonplaceholder.typicode.com/users


import React from 'react'
import User from './components/user'

const Users = ({users}) => {
  return (
      <div>

    <h1>Users</h1>
    {users.map(user => (<User key={user.id} user={user}/>))}
      </div>
   
  )
  }
export default Users

//fetch users data

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    return {
        props:{
            users:data
        }
    }
} 
//in the function props are passed to the component and can be fetched in build time

