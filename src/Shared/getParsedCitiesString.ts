// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetParsedCitiesStringParamsType = string

export type GetParsedCitiesStringOptionsType = { printRes?: boolean }

export type GetParsedCitiesStringResType = string[]

interface GetParsedCitiesStringType {
  (
    params: GetParsedCitiesStringParamsType,
    options?: GetParsedCitiesStringOptionsType
  ): GetParsedCitiesStringResType
}

const optionsDefault: GetParsedCitiesStringOptionsType = { printRes: false }

/**
 * @description Function to getParsedCitiesString
 * @run ts-node src/Shared/getParsedCitiesString.ts
 * @import import { getParsedCitiesString, GetParsedCitiesStringParamsType } from '../Shared/getParsedCitiesString'
 */
export const getParsedCitiesString: GetParsedCitiesStringType = (
  inputCities: GetParsedCitiesStringParamsType,
  optionsIn: GetParsedCitiesStringOptionsType = optionsDefault
) => {
  const options: GetParsedCitiesStringOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  let output: string[] = []

  try {
    output = inputCities
      .toLowerCase()
      .split(', ')
      .map((inputCity: string) => {
        return inputCity.split(' ').join('-')
      })

    if (options?.printRes) {
      console.log('getParsedCitiesString [43]', { inputCities, output })
    }
  } catch (error: any) {
    console.log('getParsedCitiesString', 'Error', error.message)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = 'San Francisco, Boston, San Mateo'
    const output = getParsedCitiesString(input, { printRes: true })
    // consoler('getParsedCitiesString [61]', 'output', output)
  })()
}
