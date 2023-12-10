import React from 'react'

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
  const { classAdded } = props

  const propsOut: CitiesWeatherListPropsOutType = {}

  return (
    <div className={getClasses('CitiesWeatherList', classAdded)}>
      CitiesWeatherList
    </div>
  )
}

export const CitiesWeatherList = React.memo(CitiesWeatherListComponent)

export type {
  CitiesWeatherListPropsType,
  CitiesWeatherListPropsOutType,
  CitiesWeatherListComponentType,
  CitiesWeatherListType,
}
