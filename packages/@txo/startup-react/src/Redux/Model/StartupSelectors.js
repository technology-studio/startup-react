/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-03-02T20:08:48+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import type { RootStateFragment } from '..'

export const selectStartupComplete = (state: RootStateFragment): ?boolean => state.startup.model.startup.startupComplete
export const selectIsRehydrated = (state: RootStateFragment): boolean => !!state.startup.model.startup.rehydrated
