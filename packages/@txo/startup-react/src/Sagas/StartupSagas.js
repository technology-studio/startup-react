/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-05-11T11:06:31+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import type {
  Saga,
  Effect,
} from 'redux-saga'
import {
  putResolve,
  select,
  take,
} from 'redux-saga/effects'
// import { Platform, UIManager } from 'react-native'

import { redux as startupRedux } from '../Redux/Model/StartupRedux'
import { selectStartupComplete } from '../Redux/Model/StartupSelectors'

// process STARTUP actions
export function * startupActionSaga (action: Object): Saga<void> {
  // TODO: if any insertion is need we will provide saga from config manager

  yield putResolve(startupRedux.creators.startupComplete())
}

export function * waitForStartupComplete (effect: Effect): Saga<void> {
  while (true) {
    const startupComplete: ?boolean = yield select(selectStartupComplete)
    if (startupComplete) {
      yield effect
      break
    }
    yield take(startupRedux.types.startupComplete)
  }
}
