export type GetHeadersParamsType = {
  tokenBearer?: string
  refresh_token?: string
  redirect_uri?: string
  client_app?: string
}

export type GetHeadersOptionsType = { printRes?: boolean }

export type GetHeadersResType = any

interface GetHeadersType {
  (
    params: GetHeadersParamsType,
    options?: GetHeadersOptionsType
  ): GetHeadersResType
}

/**
 * @description Function to getHeaders
 * @run ts-node src/shared/utils/getHeaders.ts
 * @import import { getHeaders } from './clients/getHeaders'
 */
export const getHeaders: GetHeadersType = (params, options) => {
  const { tokenBearer, refresh_token, redirect_uri, client_app } = params

  let headersAuthDict = {}
  if (tokenBearer) {
    headersAuthDict = {
      Authorization: `Bearer ${tokenBearer}`,
    }
  } else if (refresh_token && redirect_uri && client_app) {
    headersAuthDict = {
      refresh_token,
      redirect_uri,
      client_app,
    }
  }

  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    timestamp: `${+new Date()}`,
    ...headersAuthDict,
  }

  if (options?.printRes) {
    console.log('getHeaders [35]', { headers })
  }

  return headers
}
