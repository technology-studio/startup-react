declare module "@txo/startup-react" {
  import type { SagaIterator, Effect } from 'redux-saga'
  type SagaGenerator<RT = void> = SagaIterator<RT> & {
    [Symbol.iterator](): SagaGenerator<RT>;
  }

  function waitForStartupComplete (effect: Effect): SagaGenerator<void>
}

