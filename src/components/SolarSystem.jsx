import React from 'react'
import Title from './Title'
import planets from '../data/planets'
import PlanetCard from './PlanetCard'

export default function SolarSystem() {
  return (
    <div>
        Solar System Component
        <Title headline={ 'Planets' } />
        {planets.map(planet => 
          <PlanetCard planetName={ planet.name } planetImage={ planet.image }/>
        )}
    </div>
  )
}
