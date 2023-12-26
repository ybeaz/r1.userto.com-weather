import React from 'react'
import { nanoid } from 'nanoid'

import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import {
  getClasses,
  getDateString,
  getCelsiusFromFahrenheit,
} from '../../../Shared/'
import {
  Weater14DaysBodyComponentPropsType,
  Weater14DaysBodyPropsType,
  Weater14DaysBodyPropsOutType,
  Weater14DaysBodyComponentType,
  Weater14DaysBodyType,
} from './Weater14DaysBodyTypes'

/**
 * @description Component to render Weater14DaysBody
 * @import import { Weater14DaysBody, Weater14DaysBodyPropsType, Weater14DaysBodyPropsOutType, Weater14DaysBodyType } 
             from '../Components/Weater14DaysBody/Weater14DaysBody'
 */
const Weater14DaysBodyComponent: Weater14DaysBodyComponentType = (
  props: Weater14DaysBodyComponentPropsType
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

  const propsOut: Weater14DaysBodyPropsOutType = {}

  return (
    <>
      {cityWeather?.time?.startValidTime?.length ? (
        <div className={getClasses('Weater14DaysBody', classAdded)}>
          <section className={getClasses('_tableList', classAdded)}>
            <header className='_row _row_header'>
              <div className='_cell _header_startValidTime'>Start Time</div>
              <div className='_cell _header_startPeriodName'>Start Period</div>
              <div className='_cell _header_temperature'>{`Temperature, F / C`}</div>
              <div className='_cell _header_probabilityOfPrecipitations'>
                Probability of Precipitations, %
              </div>
              <div className='_cell _header_descriptionShort'>Short</div>
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
export const Weater14DaysBody = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Weater14DaysBodyComponent)
)

export type {
  Weater14DaysBodyPropsType,
  Weater14DaysBodyPropsOutType,
  Weater14DaysBodyComponentType,
  Weater14DaysBodyType,
}
