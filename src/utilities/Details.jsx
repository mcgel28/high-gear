import React from 'react'

function Details(props) {
  return (
    <div>
        <h1 className='card-brand'>{props.brand}</h1>
        <h2 className='card-model'>{props.model}</h2>
    </div>
  )
}

export default Details