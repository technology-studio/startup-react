/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-02-07T11:02:75+01:00
 * @Copyright: Technology Studio
**/

import type {
  SagaIterator,
} from 'redux-saga'

export type SagaGenerator<RT = void> = SagaIterator<RT> & {
  [Symbol.iterator]: () => SagaGenerator<RT>,
}
