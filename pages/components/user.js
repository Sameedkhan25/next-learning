import React from 'react'

const User = ({user,id}) => {
  return (
    <div>
        <h1>User {user.id}</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>

    </div>

  )
}

export default User