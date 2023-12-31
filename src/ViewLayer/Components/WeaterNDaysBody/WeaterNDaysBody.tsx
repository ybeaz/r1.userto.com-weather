import React from 'react'
import { nanoid } from 'nanoid'

import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import {
  getClasses,
  getDateString,
  getCelsiusFromFahrenheit,
} from '../../../Shared/'
import {
  WeaterNDaysBodyComponentPropsType,
  WeaterNDaysBodyPropsType,
  WeaterNDaysBodyPropsOutType,
  WeaterNDaysBodyComponentType,
  WeaterNDaysBodyType,
} from './WeaterNDaysBodyTypes'

/**
 * @description Component to render WeaterNDaysBody
 * @import import { WeaterNDaysBody, WeaterNDaysBodyPropsType, WeaterNDaysBodyPropsOutType, WeaterNDaysBodyType } 
             from '../Components/WeaterNDaysBody/WeaterNDaysBody'
 */
const WeaterNDaysBodyComponent: WeaterNDaysBodyComponentType = (
  props: WeaterNDaysBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { citiesWeather },
    display_name,
    name,
  } = props

  const cityWeather = citiesWeather.find(
    (item: any) => item.display_name === display_name && item.name === name
  )

  const getCityWeatherList = (cityWeather: any) => {
    return Array(cityWeather.time.startValidTime.length || 0)
      .fill(true)
      .map((item: boolean, index: number) => {
        const key = nanoid()
        const startValidTime = getDateString({
          timestamp: +new Date(cityWeather.time.startValidTime[index]),
          style: 'US',
        })
        const startPeriodName = cityWeather.time.startPeriodName[index]

        const temperatureFahrenheit = cityWeather.data.temperature[index]
        const temperatureCelsius = getCelsiusFromFahrenheit(
          temperatureFahrenheit
        )
        const temperatureString = `${temperatureFahrenheit} / ${temperatureCelsius}`

        const pop = cityWeather.data.pop[index]
        const weather = cityWeather.data.weather[index]
        const iconLink = cityWeather.data.iconLink[index]
        const text = cityWeather.data.text[index]

        return (
          <div key={key} className='_row _row_weather'>
            <div className='_cell _startValidTime'>
              <div className='_cellInCell'>{startValidTime}</div>
            </div>
            <div className='_cell _startPeriodName'>
              <div className='_cellInCell'>{startPeriodName}</div>
            </div>
            <div className='_cell _temperature'>
              <div className='_cellInCell'>{temperatureString}</div>
            </div>
            <div className='_cell _probabilityOfPrecipitations'>
              <div className='_cellInCell'>{pop}</div>
            </div>
            <div className='_cell _descriptionShort'>
              <div className='_cellInCell'>{weather}</div>
            </div>
            <div className='_cell _description'>
              <div className='_cellInCell'>{text}</div>
            </div>
            {/* <div className='_cell _iconLink'>
              <img src={iconLink} />
            </div> */}
          </div>
        )
      })
  }

  const propsOut: WeaterNDaysBodyPropsOutType = {}

  return (
    <>
      {cityWeather?.time?.startValidTime?.length ? (
        <div className={getClasses('WeaterNDaysBody', classAdded)}>
          <section className={getClasses('_tableList', classAdded)}>
            <header className='_row _row_header'>
              <div className='_cell _header_startValidTime'>Start Time</div>
              <div className='_cell _header_startPeriodName'>Start Period</div>
              <div className='_cell _header_temperature'>
                <span className='_span'>Tempe</span>
                <span className='_span'>rature</span>
                <span className='_span2'> F / C</span>
              </div>
              <div className='_cell _header_probabilityOfPrecipitations'>
                Probability of Precipitations, %
              </div>
              <div className='_cell _header_descriptionShort'>Brief</div>
              <div className='_cell _header_description'>Description</div>
              {/* <div className='_cell _header_iconLink'>Icon</div> */}
            </header>

            {getCityWeatherList(cityWeather || {})}
          </section>
        </div>
      ) : null}
    </>
  )
}

const storeStateSliceProps: string[] = ['citiesWeather']
export const WeaterNDaysBody = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(WeaterNDaysBodyComponent)
)

export type {
  WeaterNDaysBodyPropsType,
  WeaterNDaysBodyPropsOutType,
  WeaterNDaysBodyComponentType,
  WeaterNDaysBodyType,
}
