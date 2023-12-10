import React from 'react'

import { getClasses } from '../../../Shared/getClasses'

import {
  ButtonPropsType,
  ButtonPropsOutType,
  ButtonComponentType,
  ButtonType,
} from './ButtonTypes'

/**
 * @description Component to render Button
 * @import import { Button, ButtonPropsType, ButtonPropsOutType, ButtonType } 
             from '../Components/Button/Button'
 */
const ButtonComponent: ButtonComponentType = (props: ButtonPropsType) => {
  const { classAdded, capture, handleOnClick } = props

  const propsOut: ButtonPropsOutType = {
    buttonProps: {
      className: '_inputInit _button',
      onClick: (event: any) => handleOnClick(event),
    },
  }

  return (
    <div className={getClasses('Button', classAdded)}>
      <button {...propsOut.buttonProps}>{capture}</button>
    </div>
  )
}

export const Button = React.memo(ButtonComponent)

export type {
  ButtonPropsType,
  ButtonPropsOutType,
  ButtonComponentType,
  ButtonType,
}
