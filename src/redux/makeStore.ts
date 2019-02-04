import { createStore } from 'redux'
import reducer, { State } from './modules'

export default (initialState: State) => {
  return createStore(reducer, initialState)
}
