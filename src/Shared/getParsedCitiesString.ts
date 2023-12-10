// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetParsedCitiesStringParamsType = string

export type GetParsedCitiesStringOptionsType = { printRes?: boolean }

export type GetParsedCitiesStringResType = Promise<any>

interface GetParsedCitiesStringType {
  (
    params: GetParsedCitiesStringParamsType,
    options?: GetParsedCitiesStringOptionsType
  ): GetParsedCitiesStringResType
}

const optionsDefault: GetParsedCitiesStringOptionsType = { printRes: false }

/**
 * @description Function to getParsedCitiesString
 * @run ts-node src/shared/utils/getParsedCitiesString.ts
 * @import import { getParsedCitiesString, GetParsedCitiesStringParamsType } from '../Shared/getParsedCitiesString'
 */
export const getParsedCitiesString: GetParsedCitiesStringType = async (
  params: GetParsedCitiesStringParamsType,
  optionsIn: GetParsedCitiesStringOptionsType = optionsDefault
) => {
  const options: GetParsedCitiesStringOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  let output: any[] = []

  try {
    output = await []

    if (options?.printRes) {
      console.log('getParsedCitiesString [43]', { output })
      consoler('getParsedCitiesString [44]', 'output', output)
    }
  } catch (error: any) {
    console.log('getParsedCitiesString', 'Error', error.message)
    consolerError('getParsedCitiesString', error)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = ''
    const output = await getParsedCitiesString(input, { printRes: true })
    console.log('getParsedCitiesString [60]', { input, output })
    consoler('getParsedCitiesString [61]', 'output', output)
  })()
}
