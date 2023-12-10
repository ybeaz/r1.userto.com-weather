import { CityWeatherType } from '../../../Interfaces'

export type CitiesWeatherListPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  citiesWeather: CityWeatherType[]
}

export type CitiesWeatherListPropsOutType = Record<string, any>

/**
 * @import import { CitiesWeatherListType } from './CitiesWeatherListType'
 */
export interface CitiesWeatherListComponentType
  extends React.FunctionComponent<CitiesWeatherListPropsType> {
  (props: CitiesWeatherListPropsType): React.ReactElement
}

export type CitiesWeatherListType =
  React.FunctionComponent<CitiesWeatherListPropsType>
