import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_INPUT_CITIES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const nextForms = {
    ...forms,
    inputCities: data,
  }

  return { ...store, forms: nextForms }
}
