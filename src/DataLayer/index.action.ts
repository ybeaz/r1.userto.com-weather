import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'

const ACTIONS_SYNC: string[] = [
  'SET_MODAL_FRAMES',
  'ONCHANGE_INPUT_CITIES',
  'SET_CITIES_WEATHER',
  'TOGGLE_LOADER_OVERLAY',
]

const ACTION_ASYNC: string[] = ['READ_CITIES_WEATHER']

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)
