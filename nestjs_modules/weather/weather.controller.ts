import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common'
import { Public } from '../auth/decorators/public.decorator'

import { BodyWeatherType } from './types/'

import { consoler } from './shared/'
import { WeatherService } from './weather.service'

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.OK)
  async readWeatherCities(@Body() { cities }: BodyWeatherType): Promise<any> {
    const readWeatherCities: string[] = cities
    const data = await this.weatherService.readWeatherCities(readWeatherCities)
    return { data }
  }
}
