import { CityWeatherType } from './'

export type RootStoreType = {
  citiesWeather: CityWeatherType[]
  forms: {
    inputCities: string
  }
  componentsState: {
    isLoaderOverlayVisible: boolean
  }
}
