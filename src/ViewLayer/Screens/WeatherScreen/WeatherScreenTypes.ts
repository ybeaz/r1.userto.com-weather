import { HandleEventType, RootStoreType } from '../../../Interfaces/'

export type WeatherScreenPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  handleEvents?: HandleEventType
  storeStateSlice: {
    inputCities: any
    citiesWeather: any
  }
}

export type WeatherScreenPropsOutType = Record<string, any>

/**
 * @import import { WeatherScreenType } from './WeatherScreenType'
 */
export interface WeatherScreenComponentType
  extends React.FunctionComponent<WeatherScreenPropsType> {
  (props: WeatherScreenPropsType): React.ReactElement
}

export type WeatherScreenType = React.FunctionComponent<WeatherScreenPropsType>
