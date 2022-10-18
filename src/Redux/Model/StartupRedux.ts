/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-04-14T11:03:56+02:00
 * @Copyright: Technology Studio
**/

import type {
  Redux,
  ReduxHandler,
} from '@txo/redux'
import {
  createRedux,
} from '@txo/redux'
import update from 'immutability-helper'

export type State = {
  rehydrated: boolean | null,
  startupComplete: boolean | null,
}

export type Handlers = {
  startup: ReduxHandler<State, undefined>,
  startupComplete: ReduxHandler<State, undefined>,
}

export const redux: Redux<State, State, keyof Handlers, Handlers> = createRedux<State, keyof Handlers, Handlers>({
  filter: {
    rehydrated: true,
    startupComplete: true,
  },
  initialState: {
    rehydrated: null,
    startupComplete: null,
  },
  handlers: {
    startup: (state: State) => update(state, { $merge: { rehydrated: true } }),
    startupComplete: (state: State) => update(state, { $merge: { startupComplete: true } }),
  },
  prefix: 'startup.model.startup.',
})
