import React from 'react'

export default function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid='planet-card'
    className='carousel-inner border'>
        <p>{ planetName }</p>
        <img src={ planetImage } alt='planet'/>
    </div>
  )
}
