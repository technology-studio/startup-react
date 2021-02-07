/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-04-25T22:13:00+02:00
 * @Copyright: Technology Studio
**/

import {
  combineRedux,
  NodeRedux,
} from '@txo/redux'
import * as ModelRedux from './Model'
// import * as ServicesRedux from './Services'

export type State = {
  model: ModelRedux.State,
  // services: ServicesState.State,
}

declare module 'react-redux' {
  interface DefaultRootState {
    startup: State,
  }
}

export const nodeRedux: NodeRedux<State> = combineRedux({
  model: ModelRedux.redux,
  // services: ServicesRedux.redux,
})
