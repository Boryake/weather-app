import React from 'react'
import Weather from "./Weather"

export default {
    title: "Weather",
    component: Weather
}

export const WeatherNigth = () => <Weather temperature={14} state="cloud"/>
export const WeatherCloud = () => <Weather temperature={10} state="downpour"/>

