/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-06-14T19:18:33+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import type { Saga } from 'redux-saga'
import {
  takeLatest,
  all,
} from 'redux-saga/effects'

import { redux as startupRedux } from '../Redux/Model/StartupRedux'

import { startupActionSaga } from './StartupSagas'

export function * rootSaga (): Saga<void> {
  yield all([
    takeLatest(startupRedux.types.startup, startupActionSaga),
  ])
}
