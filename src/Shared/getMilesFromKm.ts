import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetMilesFromKmParamsType = number | string

export type GetMilesFromKmOptionsType = {
  printRes?: boolean
  parentFunction?: string
  decimals?: number
}

export type GetMilesFromKmResType = number

interface GetMilesFromKmType {
  (
    params: GetMilesFromKmParamsType,
    options?: GetMilesFromKmOptionsType
  ): GetMilesFromKmResType
}

const optionsDefault: GetMilesFromKmOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
  decimals: 0,
}

/**
 * @description Function to getMilesFromKm. Formular: (32°F − 32) × 5/9 = 0°C
 * @run ts-node src/Shared/getMilesFromKm.ts
 * @import import { getMilesFromKm, GetMilesFromKmParamsType } from '../Shared/getMilesFromKm'
 */
export const getMilesFromKm: GetMilesFromKmType = (
  numberMiles: GetMilesFromKmParamsType,
  optionsIn: GetMilesFromKmOptionsType = optionsDefault
) => {
  const options: GetMilesFromKmOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction, decimals = 0 } = options

  const numberMilesNext =
    typeof numberMiles === 'string' ? parseInt(numberMiles, 10) : numberMiles

  let output: number = 0

  try {
    output = numberMilesNext * 1.609

    output = +output.toFixed(decimals)

    if (printRes) {
      console.log('getMilesFromKm [43]', { output })
    }
  } catch (error: any) {
    console.log('getMilesFromKm', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const inputs = [0, 62]
    const output = inputs.forEach((input: number) => {
      const output = getMilesFromKm(input, { printRes: true })
      console.log('getMilesFromKm [60]', { input, output })
    })
  })()
}
