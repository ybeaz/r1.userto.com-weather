import React from 'react'

export type Weater14DaysBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: { citiesWeather: any }
  display_name: string
  name: string
}

export type Weater14DaysBodyPropsType = Omit<
  Weater14DaysBodyComponentPropsType,
  'storeStateSlice'
>

export type Weater14DaysBodyPropsOutType = Record<string, any>

/**
 * @import import { Weater14DaysBodyComponentPropsType, Weater14DaysBodyPropsType, Weater14DaysBodyPropsOutType, Weater14DaysBodyComponentType, Weater14DaysBodyType } from './Weater14DaysBodyTypes'
 */
export interface Weater14DaysBodyComponentType
  extends React.FunctionComponent<Weater14DaysBodyComponentPropsType> {
  (props: Weater14DaysBodyComponentPropsType): React.ReactElement
}

export type Weater14DaysBodyType =
  React.FunctionComponent<Weater14DaysBodyPropsType>
