import React from 'react'

import { getClasses } from '../../../Shared/getClasses'

import {
  InputPropsType,
  InputPropsOutType,
  InputComponentType,
  InputType,
} from './InputTypes'

/**
 * @description Component to render Input
 * @import import { Input, InputPropsType, InputPropsOutType, InputType } 
             from '../Components/Input/Input'
 */
const InputComponent: InputComponentType = (props: InputPropsType) => {
  const { classAdded, handleOnInput, value, placeholder } = props

  const propsOut: InputPropsOutType = {
    inputProps: {
      className: '_input',
      onInput: (event: any) => handleOnInput(event),
      value,
      placeholder,
    },
  }

  return (
    <div className={getClasses('Input', classAdded)}>
      <input {...propsOut.inputProps} />
    </div>
  )
}

export const Input = React.memo(InputComponent)

export type { InputPropsType, InputPropsOutType, InputComponentType, InputType }
