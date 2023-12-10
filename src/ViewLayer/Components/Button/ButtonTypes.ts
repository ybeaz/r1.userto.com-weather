export type ButtonPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  capture: string
  handleOnClick: any
}

export type ButtonPropsOutType = Record<string, any>

/**
 * @import import { ButtonType } from './ButtonType'
 */
export interface ButtonComponentType
  extends React.FunctionComponent<ButtonPropsType> {
  (props: ButtonPropsType): React.ReactElement
}

export type ButtonType = React.FunctionComponent<ButtonPropsType>
