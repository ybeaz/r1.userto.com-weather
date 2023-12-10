import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export interface FeatureFlagType {
  (envTypeIn?: string): boolean | any
}

/** @description Flag template */
export const isTemplate: FeatureFlagType = (envTypeIn = envType) => false
