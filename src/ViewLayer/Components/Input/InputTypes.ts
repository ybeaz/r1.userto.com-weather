export type InputPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  handleOnInput: (event: any) => void
  handleKeyPress: (event: any) => void
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
