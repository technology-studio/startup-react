/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-04-25T21:14:39+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import { combineRedux } from '@txo/redux'

import * as StartupRedux from './StartupRedux'

export type State = {
  startup: StartupRedux.State,
}

export const redux = combineRedux({
  startup: StartupRedux.redux,
})
