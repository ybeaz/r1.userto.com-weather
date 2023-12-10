import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_INPUT_CITIES: ActionEventType = (event, data) =>
  dispatch(actionSync.ONCHANGE_INPUT_CITIES(data))
