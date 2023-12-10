import path from 'path'

import { getCopiedFileDir } from './getCopiedFileDir'
import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetCopiedFilesDeploymentParamsType = any

export type GetCopiedFilesDeploymentOptionsType = { printRes?: boolean }

export type GetCopiedFilesDeploymentResType = Promise<void>

interface GetCopiedFilesDeploymentType {
  (
    params: GetCopiedFilesDeploymentParamsType,
    options?: GetCopiedFilesDeploymentOptionsType
  ): GetCopiedFilesDeploymentResType
}

const optionsDefault: GetCopiedFilesDeploymentOptionsType = { printRes: false }

/**
 * @description Function to getCopiedFilesDeployment
 * @run ts-node tools/getCopiedFilesDeployment.ts
 * @import import { getCopiedFilesDeployment, GetCopiedFilesDeploymentParamsType } from '../Shared/getCopiedFilesDeployment'
 */
export const getCopiedFilesDeployment: GetCopiedFilesDeploymentType = async (
  optionsIn: GetCopiedFilesDeploymentOptionsType = optionsDefault
) => {
  const options: GetCopiedFilesDeploymentOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  try {
    /* [source, destination, overwrite] */
    const getCopiedFileDirParamsArr: [string, string, boolean][] = [
      [
        path.join(__dirname, '..', '/package.json'),
        path.join(__dirname, '..', '/web-build/package.json'),
        true,
      ],
      [
        path.join(__dirname, '..', '/deployment/index-weather.html'),
        path.join(__dirname, '..', '/web-build/index.html'),
        true,
      ],
    ]

    await Promise.all(
      getCopiedFileDirParamsArr.map(
        async getCopiedFileDirParams =>
          await getCopiedFileDir(...getCopiedFileDirParams)
      )
    )

    if (options?.printRes) {
      consoler(
        'getCopiedFilesDeployment [44]',
        'output',
        getCopiedFileDirParamsArr
      )
    }
  } catch (error: any) {
    consolerError('getCopiedFilesDeployment', error)
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const output = await getCopiedFilesDeployment({ printRes: true })
    // consoler('getCopiedFilesDeployment [61]', 'output', output)
  })()
}
