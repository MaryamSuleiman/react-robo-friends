import React from 'react'
import Card from './Card'
function Cardlist({users}) {
  return (
    <div className='cardlist'>

     {
      users.map((user)=>(
        <Card 
          key={user.id} 
          name = {user.name} 
          username = {user.username} 
          email = {user.email}  
        />
      ))
     }

    </div>
  )
}

export default Cardlist