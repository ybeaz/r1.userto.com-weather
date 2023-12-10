export type GetHeadersParamsType = void

export type GetHeadersResType = any

interface GetHeadersType {
  (options?: { printRes?: boolean }): GetHeadersResType
}

/**
 * @description Function to getHeaders
 * @run ts-node src/shared/utils/getHeaders.ts
 * @import import { getHeaders } from '../Shared/getHeaders'
 */
export const getHeaders: GetHeadersType = options => {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    timestamp: `${+new Date()}`,
  }

  if (options?.printRes) {
    console.log('getHeaders [22]', { headers })
  }

  return headers
}
