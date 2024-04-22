import React from 'react'
import Avatar from './Avatar'

function Card(props) {
  return (
    <div className='card'>
      <div className='card-top'>
      
      <Avatar img={props.img} />
      <h2 className='brand'>{props.brand}</h2>
      <h3 className='model'>{props.model}</h3>
      </div>
    </div>
  )
}

export default Card