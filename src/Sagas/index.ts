/**
 * @Author: Rostislav Simonik < rostislav.simonik@technologystudio.sk>
 * @Date:   2017-06-14T19:18:33+02:00
 * @Copyright: Technology Studio
**/

import {
  takeLatest,
  all,
} from 'redux-saga/effects'

import { redux as startupRedux } from '../Redux/Model/StartupRedux'
import type { SagaGenerator } from '../Model/Types'

import { startupActionSaga } from './StartupSagas'

export function * rootSaga (): SagaGenerator {
  yield all([
    takeLatest(startupRedux.types.startup, startupActionSaga),
  ])
}
