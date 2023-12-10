import React from 'react'

import { getClasses } from '../../../Shared/getClasses'

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

  const propsOut: WeatherScreenPropsOutType = {}

  return (
    <div className={getClasses('WeatherScreen', classAdded)}>WeatherScreen</div>
  )
}

export const WeatherScreen = React.memo(WeatherScreenComponent)

export type {
  WeatherScreenPropsType,
  WeatherScreenPropsOutType,
  WeatherScreenComponentType,
  WeatherScreenType,
}
