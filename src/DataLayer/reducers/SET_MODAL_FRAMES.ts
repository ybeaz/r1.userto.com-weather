import { rootStoreDefault } from '../rootStoreDefault'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { getUpdatedArrByArrInput } from '../../Shared/getUpdatedArrByArrInput'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export const SET_MODAL_FRAMES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  console.info('SET_MODAL_FRAMES [14]', { data })

  let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))

  if (data.length > 0) {
    modaleFramesNext = getUniqArrDeep(modalFrames)
    modaleFramesNext = getUpdatedArrByArrInput(
      modaleFramesNext,
      data,
      'childName'
    )
  } else {
    modaleFramesNext = rootStoreDefault.componentsState.modalFrames
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
