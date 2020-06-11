/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-04-14T11:03:56+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import {
  createRedux,
  type Action,
  type Redux,
} from '@txo/redux'
import update from 'immutability-helper'

export type State = {
  rehydrated: ?boolean,
  startupComplete: ?boolean,
}

export type Creators = {
  startup: () => Action,
  startupComplete: () => Action,
}

export const redux: Redux<State, Creators> = createRedux({
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
