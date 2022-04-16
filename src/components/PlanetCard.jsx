import React from 'react'

export default function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid='planet-card'
    className='border'>
        <p>{ planetName }</p>
        <img className='class="d-block w-100"' 
        src={ planetImage } 
        alt='planet'/>
    </div>
  )
}
