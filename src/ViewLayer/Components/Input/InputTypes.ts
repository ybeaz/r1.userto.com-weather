export type InputPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  handleOnInput: any
  value: string
  placeholder: string
}

export type InputPropsOutType = Record<string, any>

/**
 * @import import { InputType } from './InputType'
 */
export interface InputComponentType
  extends React.FunctionComponent<InputPropsType> {
  (props: InputPropsType): React.ReactElement
}

export type InputType = React.FunctionComponent<InputPropsType>
