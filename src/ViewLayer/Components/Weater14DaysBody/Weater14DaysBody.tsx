import React from 'react'

import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  Weater14DaysBodyComponentPropsType,
  Weater14DaysBodyPropsType,
  Weater14DaysBodyPropsOutType,
  Weater14DaysBodyComponentType,
  Weater14DaysBodyType,
} from './Weater14DaysBodyTypes'

/**
 * @description Component to render Weater14DaysBody
 * @import import { Weater14DaysBody, Weater14DaysBodyPropsType, Weater14DaysBodyPropsOutType, Weater14DaysBodyType } 
             from '../Components/Weater14DaysBody/Weater14DaysBody'
 */
const Weater14DaysBodyComponent: Weater14DaysBodyComponentType = (
  props: Weater14DaysBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: Weater14DaysBodyPropsOutType = {}

  return (
    <div className={getClasses('Weater14DaysBody', classAdded)}>
      Weater14DaysBody
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const Weater14DaysBody = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Weater14DaysBodyComponent)
)

export type {
  Weater14DaysBodyPropsType,
  Weater14DaysBodyPropsOutType,
  Weater14DaysBodyComponentType,
  Weater14DaysBodyType,
}
