import React, { ReactElement, FunctionComponent } from 'react'

import { ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { Weater14DaysBody } from '../../Components/'

import {
  ModalFramesComponentPropsType,
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
} from './ModalFramesTypes'

const CHILDREN: Record<string, FunctionComponent<any>> = {
  Weater14DaysBody,
  //AuthUser, Not used in favor of Cognito authetication
  // SkillExchangeIntro2,
  // SkillExchangeIntro,
}

/**
 * @description Component to render ModalFrames
 * @import import { ModalFrames, ModalFramesPropsType, ModalFramesPropsOutType, ModalFramesType } 
             from '../Components/ModalFrames/ModalFrames'
 */
const ModalFramesComponent: ModalFramesComponentType = (
  props: ModalFramesComponentPropsType
) => {
  const {
    storeStateSlice: { modalFrames },
  } = props

  const getChildren: Function = (children: any[]): (ReactElement | null)[] => {
    return children.map(child => {
      const { childName, isActive, childProps } = child
      const CHILD = CHILDREN[childName]
      const key = JSON.stringify({ childName, childProps })

      if (!CHILD) return null

      const closeAction = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [{ childName, isActive: false, childProps }],
      }

      const addClass = !isActive ? '' : 'ModalFrames_display'

      const propsOut = {
        buttonCloseProps: {
          icon: 'MdClose',
          classAdded: 'Button_MdClose',
          action: closeAction,
        },
        childProps,
      }

      return (
        <div
          key={key}
          id='modalFrames'
          className={`ModalFrames ${addClass} ModalFrames_${childName}`}
          onClick={event => handleEvents(event, closeAction)}
        >
          <div className='__content'>
            <span className='_close'>
              <ButtonYrl {...propsOut.buttonCloseProps} />
            </span>
            <div
              className='_inner'
              onClick={event =>
                handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })
              }
            >
              <CHILD {...propsOut.childProps} />
            </div>
          </div>
        </div>
      )
    })
  }

  const propsOut: ModalFramesPropsOutType = {}

  return <>{getChildren(modalFrames)}</>
}

const storeStateSliceProps: string[] = ['modalFrames']
export const ModalFrames: ModalFramesType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ModalFramesComponent)
)

export type {
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
}
