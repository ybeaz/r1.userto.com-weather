import React from 'react'

import { getClasses } from '../../../Shared/getClasses'

import { Input, Button, CitiesWeatherList } from '../../Components/'

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
  const { classAdded } = props

  const propsOut: WeatherScreenPropsOutType = {
    inputProps: {
      classAdded: [],
      handleOnInput: (valueIn: string) => {
        console.info('WeatherScreen [27]', { valueIn })
      },
      value: 'abc',
      placeholder: 'ex.: New York City, San Francisco',
    },
    buttonProps: {
      classAdded: [],
      capture: 'Submit',
      handleOnClick: () => {
        console.info('WeatherScreen [35]', {})
      },
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

export const WeatherScreen = React.memo(WeatherScreenComponent)

export type {
  WeatherScreenPropsType,
  WeatherScreenPropsOutType,
  WeatherScreenComponentType,
  WeatherScreenType,
}
