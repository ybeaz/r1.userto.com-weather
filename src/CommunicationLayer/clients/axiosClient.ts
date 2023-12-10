import axios from 'axios'

import { SERVERS_MAIN } from '../../Constants/servers.const'

const { timeout } = SERVERS_MAIN

export const axiosClient = (baseURL: string, headers: any) =>
  axios.create({
    baseURL: `${baseURL}`,
    timeout,
    headers,
  })
