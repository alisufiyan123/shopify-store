import React from 'react'

const Text = ({ headline, description }) => {
  return (
    <div>
        Static Text....
        <h1 style={{fontSize: '2em', fontWeight: 'bold'}}>{headline}</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default Text