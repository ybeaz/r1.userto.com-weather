import { CityWeatherType } from './'

export type RootStoreType = {
  citiesWeather: CityWeatherType[]
  forms: {
    inputCities: string
  }
  componentsState: {
    isLoaderOverlayVisible: boolean
    modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  }
}
