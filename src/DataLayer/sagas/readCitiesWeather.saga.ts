import { takeEvery, put } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* readCitiesWeather(): Iterable<any> {
  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const citiesWeather: any = yield []

    yield put(actionSync.SET_CITIES_WEATHER(citiesWeather))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readCitiesWeather [40]', error.name + ': ' + error.message)
  }
}

export default function* readCitiesWeatherSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], readCitiesWeather)
}
