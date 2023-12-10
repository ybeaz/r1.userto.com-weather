import React from 'react'
import { nanoid } from 'nanoid'

import { CityWeatherType } from '../../../Interfaces'
import { getClasses } from '../../../Shared/getClasses'

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
        temperature,
        temperatureUnit,
        temperatureTrend,
        windSpeed,
        windDirection,
      } = cityWeather
      return (
        <div key={key} className='_row _row_weather'>
          <div className='_cell _display_name'>{display_name}</div>
          <div className='_cell _temperature'>{temperature}</div>
          <div className='_cell _temperatureUnit'>{temperatureUnit}</div>
          <div className='_cell _temperatureTrend'>{temperatureTrend}</div>
          <div className='_cell _windSpeed'>{windSpeed}</div>
          <div className='_cell _windDirection'>{windDirection}</div>
        </div>
      )
    })
  }

  const propsOut: CitiesWeatherListPropsOutType = {}

  return (
    <section className={getClasses('CitiesWeatherList', classAdded)}>
      {citiesWeather.length ? (
        <header className='_row _row_header'>
          <div className='_cell _header_display_name'>City Name</div>
          <div className='_cell _header_temperature'>Temperature</div>
          <div className='_cell _header_temperatureUnit'>Unit</div>
          <div className='_cell _header_temperatureTrend'>Trend</div>
          <div className='_cell _header_windSpeed'>Wind Speed</div>
          <div className='_cell _header_windDirection'>Wind Direction</div>
        </header>
      ) : null}
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
