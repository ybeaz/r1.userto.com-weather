import { takeEvery, put, select } from 'redux-saga/effects'
import axios from 'axios'

import { getHeaders } from '../../CommunicationLayer/clients/getHeaders'
import { getDetectedEnv } from '../../Shared'
import { SERVERS_MAIN, ServersType } from '../../Constants/servers.const'
import { MethodHttpEnumType } from '../../@types/'
import { ActionReduxType, RootStoreType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { axiosClient } from '../../CommunicationLayer/clients/axiosClient'
import { getParsedCitiesString } from '../../Shared/getParsedCitiesString'

function* readCitiesWeather(): Iterable<any> {
  const store: any = yield select((store: RootStoreType) => store)
  const {
    forms: { inputCities },
  } = store as RootStoreType

  const envType: string = getDetectedEnv()
  const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string
  const headers = getHeaders({})

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const cities = getParsedCitiesString(inputCities)
    if (!cities.length) return

    const payload = { cities }

    const res: any = yield axiosClient(
      baseURL,
      headers
    )({
      url: '/weather-map-click',
      data: payload,
      method: MethodHttpEnumType['post'],
    })
    const citiesWeather = res?.data?.data || []

    const citiesWeatherNext = citiesWeather.filter(
      (item: any) => item.display_name
    )

    yield put(actionSync.SET_CITIES_WEATHER(citiesWeatherNext))
    yield put(actionSync.ONCHANGE_INPUT_CITIES(''))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readCitiesWeather [40]', error.name + ': ' + error.message)
  }
}

export default function* readCitiesWeatherSaga() {
  yield takeEvery(
    [actionAsync.READ_CITIES_WEATHER.REQUEST().type],
    readCitiesWeather
  )
}
