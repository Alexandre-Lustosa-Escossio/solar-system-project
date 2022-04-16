import React from 'react'
import propTypes from 'prop-types' 

export default function Title({ headline }) {
  return (
    <div>
        <h2>{ headline }</h2>
    </div>
  )
}

Title.propTypes = {
    headline: propTypes.string.isRequired
}