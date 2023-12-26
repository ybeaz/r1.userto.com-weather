import { Injectable } from '@nestjs/common'
import axios from 'axios'

import { consoler } from './shared/'
import { getErrorInfo } from './shared/'
import { MethodHttpEnumType, GeoCityType, GridCityType } from './types/'

type WeatherMongooseType = any

interface DatesType {
  dateCreated: number
  dateUpdated: number
  dateDeleted: number
}

interface WeatherServiceType {
  readWeatherCities: (readWeatherCitiesInput: string[]) => Promise<any>
}

/**
 * @description Class for CRUD operations on weather
 */
@Injectable()
export class WeatherService implements WeatherServiceType {
  constructor() {}

  async readGeoCities(readWeatherCitiesInput: string[]) {
    let data: any = []
    try {
      data = await Promise.all(
        readWeatherCitiesInput.map(async (city: string) => {
          const config = {
            method: MethodHttpEnumType['GET'],
            url: `https://nominatim.openstreetmap.org/search?city=${city}&format=json&country=usa`,
            headers: {
              'Content-Type': 'application/json',
            },
          }

          const res = await axios.request(config)

          return res.data
        })
      )

      data = data.map((city: any[]) => {
        return city.map((cityItem: any) => {
          const { name, display_name, lat, lon } = cityItem
          return { name, display_name, lat, lon }
        })
      })
    } catch (error: any) {
      getErrorInfo(error)
    } finally {
      return data
    }
  }

  async readGridData(geoCity: GeoCityType) {
    let data: any = {}
    try {
      const { name, display_name, lat, lon } = geoCity
      const config = {
        method: MethodHttpEnumType['GET'],
        url: `https://api.weather.gov/points/${lat},${lon}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.request(config)

      const { gridId, gridX, gridY } = res.data?.properties

      data = { name, display_name, gridId, gridX, gridY }
    } catch (error: any) {
      getErrorInfo(error)
    } finally {
      return data
    }
  }

  async readWeatherCity(gridCity: GridCityType) {
    let data: any = {}
    try {
      const { name, display_name, gridId, gridX, gridY } = gridCity
      const config = {
        method: MethodHttpEnumType['GET'],
        url: `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.request(config)

      const {
        temperature,
        temperatureUnit,
        temperatureTrend,
        windSpeed,
        windDirection,
      } = res.data?.properties?.periods[0]

      data = {
        name,
        display_name,
        temperature,
        temperatureUnit,
        temperatureTrend,
        windSpeed,
        windDirection,
      }
    } catch (error: any) {
      getErrorInfo(error)
    } finally {
      return data
    }
  }

  async readWeatherCitiesIteration(geoCities: any[any]) {
    let data: any = []
    try {
      data = await Promise.all(
        geoCities.map(async (geoCityArr: any[]) => {
          return await Promise.all(
            geoCityArr.map(async (geoCity: GeoCityType) => {
              const gridData: GridCityType = await this.readGridData(geoCity)
              return await this.readWeatherCity(gridData)
            })
          )
        })
      )
    } catch (error: any) {
      getErrorInfo(error)
    } finally {
      return data
    }
  }

  getFlattenArray(arr: any[]) {
    let data: any = []
    arr.forEach((items: any[]) => {
      items.forEach((item: any) => {
        data.push(item)
      })
    })
    return data
  }

  async readWeatherCities(readWeatherCitiesInput: string[]) {
    let data: any = []
    try {
      const geoCities = await this.readGeoCities(readWeatherCitiesInput)

      const weatherData = await this.readWeatherCitiesIteration(geoCities)

      data = this.getFlattenArray(weatherData)
    } catch (error: any) {
      getErrorInfo(error)
    } finally {
      return data
    }
  }
}
