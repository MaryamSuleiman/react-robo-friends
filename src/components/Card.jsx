
import React from 'react'


function Card({name,username,email}) {
  return (
    <div className='card'>
      <img src= {`https://robohash.org/${name}.png`} alt="robo"/>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}
    
export default Card