import React from 'react'
import Title from './Title'
import missions from '../data/missions'
import MissionCard from './MissionCard'

export default function Missions() {
  return (
    <div>
        <Title headline='Missions'/>
        <div className='d-flex flex-wrap
        justify-content-around align-items-center'>
          {missions.map(mission => 
              <MissionCard key={mission.name} {...mission} /> )}
        </div>
    </div>
  )
}
