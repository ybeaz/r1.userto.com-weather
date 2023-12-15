import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetCelsiusFromFahrenheitParamsType = number | string

export type GetCelsiusFromFahrenheitOptionsType = {
  printRes?: boolean
  parentFunction?: string
  decimals?: number
}

export type GetCelsiusFromFahrenheitResType = number

interface GetCelsiusFromFahrenheitType {
  (
    params: GetCelsiusFromFahrenheitParamsType,
    options?: GetCelsiusFromFahrenheitOptionsType
  ): GetCelsiusFromFahrenheitResType
}

const optionsDefault: GetCelsiusFromFahrenheitOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
  decimals: 0,
}

/**
 * @description Function to getCelsiusFromFahrenheit. Formular: (32°F − 32) × 5/9 = 0°C
 * @run ts-node src/shared/utils/getCelsiusFromFahrenheit.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCelsiusFromFahrenheit.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCelsiusFromFahrenheit, GetCelsiusFromFahrenheitParamsType } from '../Shared/getCelsiusFromFahrenheit'
 */
export const getCelsiusFromFahrenheit: GetCelsiusFromFahrenheitType = (
  numberFahrenheit: GetCelsiusFromFahrenheitParamsType,
  optionsIn: GetCelsiusFromFahrenheitOptionsType = optionsDefault
) => {
  const options: GetCelsiusFromFahrenheitOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction, decimals = 0 } = options

  const numberFahrehheitNext =
    typeof numberFahrenheit === 'string'
      ? parseInt(numberFahrenheit, 10)
      : numberFahrenheit

  let output: number = 0

  try {
    output = ((numberFahrehheitNext - 32) * 5) / 9
    output = +output.toFixed(decimals)

    if (printRes) {
      console.log('getCelsiusFromFahrenheit [43]', { output })
    }
  } catch (error: any) {
    console.log('getCelsiusFromFahrenheit', 'Error', {
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
      const output = getCelsiusFromFahrenheit(input, { printRes: true })
      console.log('getCelsiusFromFahrenheit [60]', { input, output })
    })
  })()
}
