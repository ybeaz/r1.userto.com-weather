import React, { useState, useEffect } from 'react'

import { ModalFrames } from '../../Frames/ModalFrames/ModalFrames'
import { getClasses } from '../../../Shared/'
import {
  Input,
  Button,
  CitiesWeatherList,
  LoaderOverlayYrl,
} from '../../Components/'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

import {
  WeatherScreenPropsType,
  WeatherScreenPropsOutType,
  WeatherScreenComponentType,
  WeatherScreenType,
} from './WeatherScreenTypes'

/**
 * @description Component to render WeatherScreen
 * @import import { WeatherScreen, WeatherScreenPropsType, WeatherScreenPropsOutType, WeatherScreenType } 
             from '../Components/WeatherScreen/WeatherScreen'
 */
const WeatherScreenComponent: WeatherScreenComponentType = (
  props: WeatherScreenPropsType
) => {
  const {
    classAdded,
    handleEvents = () => {},
    storeStateSlice: { inputCities, citiesWeather },
  } = props

  useEffect(() => {
    handleEvents(
      {},
      { typeEvent: 'ONCHANGE_INPUT_CITIES', data: 'San Francisco, San Diego' }
    )

    handleEvents(
      {},
      {
        typeEvent: 'CLICK_ON_SUBMIT',
        data: {
          filterPropName: 'display_name',
          filterValue: 'San Diego, Duval County, Texas, United States',
        },
      }
    )
  }, [])

  const propsOut: WeatherScreenPropsOutType = {
    inputProps: {
      classAdded: [],
      handleOnInput: (event: any) =>
        handleEvents(
          {},
          { typeEvent: 'ONCHANGE_INPUT_CITIES', data: event.target.value }
        ),
      handleKeyPress: (event: any) => {
        if (event.key === 'Enter') {
          handleEvents({}, { typeEvent: 'CLICK_ON_SUBMIT' })
        }
      },
      value: inputCities,
      placeholder: 'ex.: New York City, San Francisco',
    },
    buttonProps: {
      classAdded: [],
      capture: 'Submit',
      handleOnClick: () => {
        handleEvents({}, { typeEvent: 'CLICK_ON_SUBMIT' })
      },
    },
    citiesWeatherListProps: {
      citiesWeather,
    },
    currentDate: citiesWeather[0] && citiesWeather[0]?.currentobservation?.Date, // getDateString({ timestamp: Date.now(), style: 'US' }),
  }

  return (
    <div className={getClasses('WeatherScreen', classAdded)}>
      <div className='_inputGroupWrapper'>
        <div className='_inputAndButton'>
          <Input {...propsOut.inputProps} />
          <Button {...propsOut.buttonProps} />
        </div>
        <div className='_instruction'>
          enter US cities separated by commas and spaces and get the current
          weather
        </div>
      </div>
      {citiesWeather.length ? (
        <div className='_citiesWeatherListWrapper'>
          <div className='_dateCurrent'>{propsOut.currentDate}</div>
          <CitiesWeatherList {...propsOut.citiesWeatherListProps} />
        </div>
      ) : null}
      <LoaderOverlayYrl {...propsOut.loaderOverlayYrlProps} />
      <ModalFrames />
    </div>
  )
}

export const WeatherScreen = withStoreStateSelectedYrl(
  ['inputCities', 'citiesWeather'],
  withPropsYrl({ handleEvents: handleEventsIn })(
    React.memo(WeatherScreenComponent)
  )
)

export type {
  WeatherScreenPropsType,
  WeatherScreenPropsOutType,
  WeatherScreenComponentType,
  WeatherScreenType,
}
