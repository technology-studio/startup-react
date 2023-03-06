/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-03-02T20:08:48+01:00
 * @Copyright: Technology Studio
**/

import type { DefaultRootState } from '@txo-peer-dep/redux'

export const selectStartupComplete = (state: DefaultRootState): boolean | null => state.startup.model.startup.startupComplete
export const selectIsRehydrated = (state: DefaultRootState): boolean => state.startup.model.startup.rehydrated ?? false
