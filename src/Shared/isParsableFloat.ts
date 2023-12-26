/**
 * @description Function to check if entity can be parsed as a number
 * @import import { isParsableFloat } from '../Shared/isParsableFloat'
 */
export const isParsableFloat: Function = (value: any): boolean => {
  try {
    return typeof parseFloat(value) === 'number' && !isNaN(parseFloat(value))
  } catch (error) {
    return false
  }
}
