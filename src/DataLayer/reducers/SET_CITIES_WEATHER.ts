import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_CITIES_WEATHER: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  return { ...store, citiesWeather: data }
}
