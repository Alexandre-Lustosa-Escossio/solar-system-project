import React from 'react'
import '../style/PlanetCard.css'

export default function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid='planet-card'
    className='card bg-secondary bg-gradient bg-opacity-10 m-2 justify-content-center
    align-items-center'>
        <p className=''>{ planetName }</p>
        <img className='' 
        src={ planetImage } 
        alt='planet'/>
    </div>
  )
}
