/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-04-14T11:03:56+02:00
 * @Copyright: Technology Studio
**/

import type {
  ActionCreator,
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

export type Creators = {
  startup: ActionCreator,
  startupComplete: ActionCreator,
}

export const redux: Redux<State, Creators> = createRedux<State, {
  startup: ReduxHandler<State>,
  startupComplete: ReduxHandler<State>,
}>({
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
