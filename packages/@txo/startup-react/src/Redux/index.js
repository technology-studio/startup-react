/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-04-25T22:13:00+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
**/

import {
  combineRedux,
  type NodeRedux,
} from '@txo/redux'
import * as ModelRedux from './Model'
// import * as ServicesRedux from './Services'

export type State = {
  model: ModelRedux.State,
  // services: ServicesState.State,
}

export type RootStateFragment = {
  startup: State,
}

export const redux: NodeRedux<State> = combineRedux({
  model: ModelRedux.redux,
  // services: ServicesRedux.redux,
})
