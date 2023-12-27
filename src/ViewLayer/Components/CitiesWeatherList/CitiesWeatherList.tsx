import React from 'react'
import { nanoid } from 'nanoid'

import { ButtonYrl } from '../../ComponentsLibrary/'
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

      const { display_name, name } = cityWeather

      const {
        name: nameCurrent,
        elev,
        latitude,
        longitude,
        Date,
        Temp: temperatureFahrenheit,
        Dewp: dewpFahrenheit,
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
      const temperatureString = `${temperatureFahrenheit} / ${temperatureCelsius}`

      const windSpeedMph = Winds
      const windSpeedKmh = getMilesFromKm(windSpeedMph)
      const windSpeedString =
        Winds === 'NA' ? 'NA' : `${windSpeedMph} / ${windSpeedKmh}`

      const windGustMph = Gust
      const windGustKmh = getMilesFromKm(Gust)
      const windGustString =
        Gust === 'NA' ? 'NA' : `${windGustMph} / ${windGustKmh}`

      const windDirection = getDegreeToCompass(Windd)

      const dewpCelsius = getCelsiusFromFahrenheit(dewpFahrenheit)
      const dewpString = `${dewpFahrenheit} / ${dewpCelsius}`

      const propsOut = {
        buttonProps: {
          className: '_inputInit _button',
          onClick: (event: any) => () => {},
        },
        buttonLink14Props: {
          icon: '',
          captureRight: '7 days',
          classAdded: 'Button_Link14Props',
          action: {
            typeEvent: 'SET_MODAL_FRAMES',
            data: [
              {
                childName: 'WeaterNDaysBody',
                isActive: true,
                childProps: { display_name, name },
              },
            ],
          },
          isDisplaying: true,
        },
      }

      return (
        <div key={key} className='_row _row_weather'>
          <div className='_cell _display_name'>{display_name}</div>
          <div className='_cell _temperature'>{temperatureString}</div>
          <div className='_cell _windSpeed'>{windSpeedString}</div>
          <div className='_cell _windGust'>{windGustString}</div>
          <div className='_cell _windDirection'>{windDirection}</div>
          <div className='_cell _seaLevelPressure'>{SLP}</div>
          <div className='_cell _relativeHumidity'>{Relh}</div>
          <div className='_cell _dewPoint'>{dewpString}</div>
          <div className='_cell _link14Props'>
            <ButtonYrl {...propsOut.buttonLink14Props} />
          </div>
        </div>
      )
    })
  }

  const propsOut: CitiesWeatherListPropsOutType = {}

  return (
    <section className={getClasses('CitiesWeatherList', classAdded)}>
      <header className='_row _row_header'>
        <div className='_cell _header_display_name'>City Name</div>
        <div className='_cell _header_temperature'>
          <span className='_span'>Tempe</span>
          <span className='_span'>rature</span>
          <span className='_span2'> F / C</span>
        </div>
        <div className='_cell _header_windSpeed'>{`Wind Speed\n mph / kmh`}</div>
        <div className='_cell _header_windGust'>{`Wind Gust\n mph / kmh`}</div>
        <div className='_cell _header_windDirection'>Wind Direction</div>
        <div className='_cell _header_seaLevelPressure'>Sea Level Pressure</div>
        <div className='_cell _header_relativeHumidity'>
          Relative Humidity %
        </div>
        <div className='_cell _header_dewPoint'>
          <span className='_span'>Dew</span>
          <span className='_span'> Point</span>
          <span className='_span2'> F / C</span>
        </div>
        <div className='_cell _header_link14Props'>Link</div>
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
