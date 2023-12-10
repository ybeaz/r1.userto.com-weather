import { all, fork } from 'redux-saga/effects'

import readCitiesWeatherSaga from './sagas/readCitiesWeather.saga'

export default function* indexSaga() {
  yield all([fork(readCitiesWeatherSaga)])
}
