/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-05-11T11:06:31+02:00
 * @Copyright: Technology Studio
**/

import type { Action } from 'redux'

import {
  call,
  Effect,
  putResolve,
  select,
  take,
} from 'redux-saga/effects'
import { configManager } from '@txo-peer-dep/startup-react'

// import { Platform, UIManager } from 'react-native'

import type { SagaGenerator } from '../Model/Types'

import { redux as startupRedux } from '../Redux/Model/StartupRedux'
import { selectStartupComplete } from '../Redux/Model/StartupSelectors'

// process STARTUP actions
export function * startupActionSaga (_action: Action): SagaGenerator {
  const { startupSaga } = configManager.config
  if (startupSaga) {
    yield call(startupSaga)
  }

  yield putResolve(startupRedux.creators.startupComplete())
}

export function * waitForStartupComplete (effect: Effect): SagaGenerator {
  while (true) {
    const startupComplete: boolean | null = yield select(selectStartupComplete)
    if (startupComplete) {
      yield effect
      break
    }
    yield take(startupRedux.types.startupComplete)
  }
}
