import React from 'react'
import Title from './Title'
import missions from '../data/missions'
import MissionCard from './MissionCard'
import '../style/Missions.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Missions() {
  return (
    <div className='d-flex flex-column
    justify-content-around align-items-center'
    id='missions-container'>
        <Title headline='Missions'/>
        <Carousel autoPlay infiniteLoop >
          {missions.map(mission => 
              <MissionCard key={mission.name} {...mission} /> )}
        </Carousel>
    </div>
  )
}
