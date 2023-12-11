import { RootStoreType } from '../Interfaces/RootStoreType'

const citiesWeatherMock: any = [
  {
    name: 'Boston',
    display_name: 'Boston, Suffolk County, Massachusetts, United States',
    temperature: 62,
    temperatureUnit: 'F',
    temperatureTrend: null,
    windSpeed: '21 mph',
    windDirection: 'S',
  },
  {
    name: 'Boston',
    display_name:
      'Boston, New Boston, Bowie County, Texas, 75570, United States',
    temperature: 52,
    temperatureUnit: 'F',
    temperatureTrend: null,
    windSpeed: '10 mph',
    windDirection: 'NW',
  },
  {
    name: 'Boston',
    display_name: 'Boston, Thomas County, Georgia, United States',
    temperature: 65,
    temperatureUnit: 'F',
    temperatureTrend: 'falling',
    windSpeed: '10 to 15 mph',
    windDirection: 'SW',
  },
  {
    name: 'Town of Boston',
    display_name: 'Town of Boston, Erie County, New York, 14025, United States',
    temperature: 44,
    temperatureUnit: 'F',
    temperatureTrend: 'falling',
    windSpeed: '8 mph',
    windDirection: 'W',
  },
  {
    name: 'Boston',
    display_name: 'Boston, Wayne County, Indiana, 47324, United States',
    temperature: 34,
    temperatureUnit: 'F',
    temperatureTrend: null,
    windSpeed: '12 mph',
    windDirection: 'NW',
  },
]

export const rootStoreDefault: RootStoreType = {
  citiesWeather: [], // citiesWeatherMock, // [],
  forms: {
    inputCities: '',
  },
  componentsState: {
    isLoaderOverlayVisible: false,
  },
}
