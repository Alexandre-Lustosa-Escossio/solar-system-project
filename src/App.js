import React from 'react'
import Header from './components/Header'
import Missions from './components/Missions'
import SolarSystem from './components/SolarSystem'

export default function App() {
  return (
    <main className='d-flex flex-column align-items-center'>
      <Header />
      <SolarSystem />
      <Missions />
    </main>
  )
}

