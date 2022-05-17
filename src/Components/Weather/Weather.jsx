import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { Icon } from '@mui/material'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny,WiRain} from "react-icons/wi"
import { IconContext } from 'react-icons'


const stateByName = {
  cloud: WiCloud,
  downpour: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
  }
  const renderState = state => {
    let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"]
    return <Icon/>
  }


  const Weather = ({temperature, state}) => {
   return (
    <div>
      <IconContext.Provider value={{ size:"4em"}}>
        {renderState(state)}    
      </IconContext.Provider>
      <Typography display="inline" variant='h2'> {temperature} </Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
}


export default Weather