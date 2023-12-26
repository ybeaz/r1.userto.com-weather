import { isParsableFloat } from './isParsableFloat'

export type GetDegreeToCompassParamsType = string | number
export type GetDegreeToCompassOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetDegreeToCompassResType = string

interface GetDegreeToCompassType {
  (
    params: GetDegreeToCompassParamsType,
    options?: GetDegreeToCompassOptionsType
  ): GetDegreeToCompassResType
}

const optionsDefault: Required<GetDegreeToCompassOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getDegreeToCompass
 * @run ts-node src/shared/utils/getDegreeToCompass.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getDegreeToCompass.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getDegreeToCompass, GetDegreeToCompassParamsType } from '../Shared/getDegreeToCompass'
 */
export const getDegreeToCompass: GetDegreeToCompassType = (
  numString: GetDegreeToCompassParamsType,
  optionsIn: GetDegreeToCompassOptionsType = optionsDefault
) => {
  const options: Required<GetDegreeToCompassOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: string = String(numString)

  try {
    let numberDegrees = numString

    if (typeof numString === 'string' && isParsableFloat(numString)) {
      numberDegrees = parseFloat(numString)

      const val = Math.round(numberDegrees / 22.5 + 0.5)
      const arr = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
      ]
      output = arr[val % 16]
    }

    if (printRes) {
      console.log('getDegreeToCompass [43]', { output })
    }
  } catch (error: any) {
    console.log('getDegreeToCompass', 'Error', {
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
    const params = ''
    const output = getDegreeToCompass(params, { printRes: true })
    console.log('getDegreeToCompass [60]', { params, output })
  })()
}
