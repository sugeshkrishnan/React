import React from 'react'

export default function UserList({users,loading, error}) {
  if(loading) return <div>...Loading</div>
  if(error) return <div>Oops! something went wrong</div>
  if(!users) return null;
  return (
    <div>UserList
    {users.length && users.map((user)=>{
      return(
        <div key={user.id}>
        <img src={user.avatar} />

        <p>{user.first_name} {user.last_name}</p>
        <p>{user.email}</p>
        
        </div>
      )
    })
    }
    </div>
  )
}
