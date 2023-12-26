import React from 'react'

export type WeaterNDaysBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: { citiesWeather: any }
  display_name: string
  name: string
}

export type WeaterNDaysBodyPropsType = Omit<
  WeaterNDaysBodyComponentPropsType,
  'storeStateSlice'
>

export type WeaterNDaysBodyPropsOutType = Record<string, any>

/**
 * @import import { WeaterNDaysBodyComponentPropsType, WeaterNDaysBodyPropsType, WeaterNDaysBodyPropsOutType, WeaterNDaysBodyComponentType, WeaterNDaysBodyType } from './WeaterNDaysBodyTypes'
 */
export interface WeaterNDaysBodyComponentType
  extends React.FunctionComponent<WeaterNDaysBodyComponentPropsType> {
  (props: WeaterNDaysBodyComponentPropsType): React.ReactElement
}

export type WeaterNDaysBodyType =
  React.FunctionComponent<WeaterNDaysBodyPropsType>
