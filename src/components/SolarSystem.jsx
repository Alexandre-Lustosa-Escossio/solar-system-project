import React from 'react'
import Title from './Title'
import planets from '../data/planets'
import PlanetCard from './PlanetCard'

export default function SolarSystem() {
  return (
    <main className='d-flex flex-column align-items-center'>
        <Title headline={ 'Planets' } />
        <div className='d-flex flex-wrap justify-content-evenly'>
          {planets.map(planet => 
            <PlanetCard key={planet.name} 
            planetName={ planet.name } 
            planetImage={ planet.image }/>
          )}
        </div>
    </main>
  )
}
