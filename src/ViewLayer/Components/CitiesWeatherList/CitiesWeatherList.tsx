import React from 'react'
import { nanoid } from 'nanoid'

import { CityWeatherType } from '../../../Interfaces'
import { getDegreeToCompass } from '../../../Shared/getDegreeToCompass'
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

      const { display_name } = cityWeather

      const {
        name,
        elev,
        latitude,
        longitude,
        Date,
        Temp: temperatureFahrenheit,
        Dewp,
        Relh,
        Winds,
        Windd,
        Gust,
        Weather,
        Weatherimage,
        Visibility,
        Altimeter,
        SLP,
        timezone,
        state,
        WindChill,
      } = cityWeather.currentobservation

      const temperatureCelsius = getCelsiusFromFahrenheit(temperatureFahrenheit)

      const windSpeedMph = Winds
      const windSpeedKmh = getMilesFromKm(windSpeedMph)
      const windSpeedString =
        Winds === 'NA' ? 'NA' : `${windSpeedMph} / ${windSpeedKmh}`

      const windGustMph = Gust
      const windGustKmh = getMilesFromKm(Gust)
      const windGustString =
        Gust === 'NA' ? 'NA' : `${windGustMph} / ${windGustKmh}`

      const windDirection = getDegreeToCompass(Windd)

      const propsOut = {
        buttonProps: {
          className: '_inputInit _button',
          onClick: (event: any) => () => {},
        },
        buttonLink14Props: {
          icon: 'MdLightbulbOutline',
          captureRight: '14 days',
          classAdded: 'Button_sideMenuItems',
          action: {
            typeEvent: 'SET_MODAL_FRAMES',
            data: [
              {
                childName: 'AboutAcademyBody',
                isActive: true,
                childProps: {},
              },
            ],
          },
          isDisplaying: true,
        },
      }

      return (
        <div key={key} className='_row _row_weather'>
          <div className='_cell _display_name'>{display_name}</div>
          <div className='_cell _temperature'>{`${temperatureFahrenheit} / ${temperatureCelsius}`}</div>
          <div className='_cell _windSpeed'>{windSpeedString}</div>
          <div className='_cell _windGust'>{windGustString}</div>
          <div className='_cell _windDirection'>{windDirection}</div>
          <div className='_cell _seaLevelPressure'>{SLP}</div>
          <div className='_cell _relativeHumidity'>{Relh}</div>
          <div className='_cell _dewPoint'>{Dewp}</div>
          <div className='_cell _dewPoint'>14 days</div>
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
        <div className='_cell _header_windSpeed'>{`Wind Speed\n mph / kmh`}</div>
        <div className='_cell _header_windGust'>{`Wind Gust\n mph / kmh`}</div>
        <div className='_cell _header_windDirection'>Wind Direction</div>
        <div className='_cell _header_seaLevelPressure'>Sea Level Pressure</div>
        <div className='_cell _header_relativeHumidity'>Relative Humidity</div>
        <div className='_cell _header_dewPoint'>Dew Point</div>
        <div className='_cell _header_dewPoint'>Link</div>
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
;``
