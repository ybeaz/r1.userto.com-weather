import React from 'react'

import { getClasses } from '../../../Shared/getClasses'

import { rootStoreDefault } from '../../../DataLayer/rootStoreDefault'
import { Input, Button, CitiesWeatherList } from '../../Components/'
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
  console.info('WeatherScreen [25]', { inputCities, props })

  const propsOut: WeatherScreenPropsOutType = {
    inputProps: {
      classAdded: [],
      handleOnInput: (event: string) =>
        handleEvents(event, { typeEvent: 'ONCHANGE_INPUT_CITIES' }),
      value: inputCities,
      placeholder: 'ex.: New York City, San Francisco',
    },
    buttonProps: {
      classAdded: [],
      capture: 'Submit',
      handleOnClick: () => handleEvents({}, { typeEvent: 'CLICK_ON_SUBMIT' }),
    },
  }

  return (
    <div className={getClasses('WeatherScreen', classAdded)}>
      <div className='_inputGroupWrapper'>
        <Input {...propsOut.inputProps} />

        <Button {...propsOut.buttonProps} />
      </div>
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
