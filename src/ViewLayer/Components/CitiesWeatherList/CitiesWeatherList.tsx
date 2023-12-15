import React from 'react'
import { nanoid } from 'nanoid'

import { CityWeatherType } from '../../../Interfaces'
import {
  getClasses,
  getCelsiusFromFahrenheit,
  getMilesFromKm,
} from '../../../Shared/'

import {
  CitiesWeatherListPropsType,
  CitiesWeatherListPropsOutType,
  CitiesWeatherListComponentType,
  CitiesWeatherListType,
} from './CitiesWeatherListTypes'

/**
 * @description Component to render CitiesWeatherList
 * @import import { CitiesWeatherList, CitiesWeatherListPropsType, CitiesWeatherListPropsOutType, CitiesWeatherListType } 
             from '../Components/CitiesWeatherList/CitiesWeatherList'
 */
const CitiesWeatherListComponent: CitiesWeatherListComponentType = (
  props: CitiesWeatherListPropsType
) => {
  const { classAdded, citiesWeather } = props

  const getCitiesWeatherList = (
    citiesWeatherListIn: CityWeatherType[]
  ): React.ReactElement[] => {
    return citiesWeatherListIn.map((cityWeather: CityWeatherType) => {
      const key = nanoid()

      const {
        name,
        display_name,
        temperature: temperatureFahrenheit,
        temperatureUnit,
        temperatureTrend,
        windSpeed: windSpeedString,
        windDirection,
      } = cityWeather

      const temperatureCelsius = getCelsiusFromFahrenheit(temperatureFahrenheit)

      const windSpeedMph = windSpeedString.split(' ')[0]
      const windSpeedKmh = getMilesFromKm(windSpeedMph)

      return (
        <div key={key} className='_row _row_weather'>
          <div className='_cell _display_name'>{display_name}</div>
          <div className='_cell _temperature'>{`${temperatureFahrenheit} / ${temperatureCelsius}`}</div>
          <div className='_cell _temperatureTrend'>{temperatureTrend}</div>
          <div className='_cell _windSpeed'>{`${windSpeedMph} / ${windSpeedKmh}`}</div>
          <div className='_cell _windDirection'>{windDirection}</div>
        </div>
      )
    })
  }

  const propsOut: CitiesWeatherListPropsOutType = {}

  return (
    <section className={getClasses('CitiesWeatherList', classAdded)}>
      <header className='_row _row_header'>
        <div className='_cell _header_display_name'>City Name</div>
        <div className='_cell _header_temperature'>{`Temperature\n    F / C`}</div>
        <div className='_cell _header_temperatureTrend'>Trend</div>
        <div className='_cell _header_windSpeed'>{`Wind Speed\n mph / kmh`}</div>
        <div className='_cell _header_windDirection'>Wind Direction</div>
      </header>

      {getCitiesWeatherList(citiesWeather)}
    </section>
  )
}

export const CitiesWeatherList = React.memo(CitiesWeatherListComponent)

export type {
  CitiesWeatherListPropsType,
  CitiesWeatherListPropsOutType,
  CitiesWeatherListComponentType,
  CitiesWeatherListType,
}
