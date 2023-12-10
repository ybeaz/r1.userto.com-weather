import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_ON_SUBMIT: ActionEventType = (event, data) =>
  dispatch(actionAsync.READ_CITIES_WEATHER.REQUEST())
