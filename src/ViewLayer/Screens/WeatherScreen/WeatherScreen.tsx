import React from 'react'

import { getClasses } from '../../../Shared/'

import { rootStoreDefault } from '../../../DataLayer/rootStoreDefault'
import {
  Input,
  Button,
  CitiesWeatherList,
  LoaderOverlayYrl,
} from '../../Components/'
import { withPropsYrl, withStoreStateYrl } from '../../Decorators/'
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
    store = rootStoreDefault,
  } = props
  const inputCities = store?.forms?.inputCities
  const citiesWeather = store?.citiesWeather

  // const dateCurrent = getDateString()

  const propsOut: WeatherScreenPropsOutType = {
    inputProps: {
      classAdded: [],
      handleOnInput: (event: any) =>
        handleEvents(
          {},
          { typeEvent: 'ONCHANGE_INPUT_CITIES', data: event.target.value }
        ),
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
      <div className='_citiesWeatherListWrapper'>
        <CitiesWeatherList {...propsOut.citiesWeatherListProps} />
      </div>
      <LoaderOverlayYrl {...propsOut.loaderOverlayYrlProps} />
    </div>
  )
}

export const WeatherScreen = withStoreStateYrl(
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
