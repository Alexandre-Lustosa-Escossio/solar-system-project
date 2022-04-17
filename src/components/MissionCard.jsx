import React from 'react'
import propTypes from 'prop-types'
import '../style/MissionCard.css'

export default function MissionCard( props ) {
    const {
        name,
        year,
        country,
        destination
    } = props
  return (
      <div data-testid='mission-card'
      className='card bg-secondary bg-gradient bg-opacity-10 m-2 d-inline-block py-4' 
      id='mission-card'>
          <p>{ name }</p>
          <p>{ year }</p>
          <p>{ country }</p>
          <p>{ destination }</p>
      </div>
  )
}

MissionCard.propTypes = {
    name: propTypes.string,
    year:propTypes.string,
    country:propTypes.string,
    destination:propTypes.string,
}.isRequired
