import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_COURSES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { isLoaded } = store
  const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
  let storeNext = { ...store, courses: data, isLoaded: isLoadedNext }

  return storeNext
}
