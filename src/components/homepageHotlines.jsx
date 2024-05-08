import React from 'react'
import '../style/otherHotlines.css'
import ambulance from '../images/hotlineImages/ambulance.svg'
import fireservice from '../images/hotlineImages/fireService.svg'
import police from '../images/hotlineImages/police.svg'
function HomepageHotlines() {
  return (
    <div className='hp-hotlines'>
        <span className='ambulance'>
            <img src={ambulance} />
            <h4>Ambulance</h4>
        </span>
        <span className='ambulance'>
            <img src={fireservice} />
            <h4>fire Service</h4>
        </span>
        <span className='ambulance'>
            <img src={police} />
            <h4>Police</h4>
        </span>
    </div>
  )
}

export default HomepageHotlines