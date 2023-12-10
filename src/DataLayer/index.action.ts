import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'

const ACTIONS_SYNC: string[] = ['ONCHANGE_INPUT_CITIES', 'SET_CITIES_WEATHER']

const ACTION_ASYNC: string[] = ['SET_CITIES_WEATHER']

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)
