import React from 'react'
import { useSelector } from 'react-redux'

import { withStoreStateSelectedYrl } from '../../Decorators/'
import { getClasses } from '../../../Shared/getClasses'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

import {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
} from './LoaderOverlayYrlTypes'

/**
 * @description Component to render LoaderOverlayYrl
 * @import import { LoaderOverlayYrl, LoaderOverlayYrlPropsType, LoaderOverlayYrlPropsOutType, LoaderOverlayYrlType } 
             from '../ComponentsLibrary/'
 */
const LoaderOverlayYrlComponent: LoaderOverlayYrlComponentType = (
  props: LoaderOverlayYrlPropsType
) => {
  const {
    storeStateSlice: { isLoaderOverlayVisible },
  } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlayYrl_show' : ''

  const propsOut: LoaderOverlayYrlPropsOutType = {}

  return (
    <div className={getClasses(`LoaderOverlayYrl`, classAdd)}>
      <div className={`_spinner`}></div>
    </div>
  )
}

export const LoaderOverlayYrl: LoaderOverlayYrlType = withStoreStateSelectedYrl(
  ['isLoaderOverlayVisible'],
  React.memo(LoaderOverlayYrlComponent)
)

export type {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
}
