import React from 'react'
import Title from './Title'
import planets from '../data/planets'
import PlanetCard from './PlanetCard'

export default function SolarSystem() {
  return (
    <main>
        <Title headline={ 'Planets' } />
        <div className='carousel slide'>
          {planets.map(planet => 
            <PlanetCard key={planet.name} 
            planetName={ planet.name } 
            planetImage={ planet.image }/>
          )}
        </div>
    </main>
  )
}
