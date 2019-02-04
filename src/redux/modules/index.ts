// root reducer file.
// recommend combineReducer and default export it.

export interface State {
  foo: any
}

const reducer = (state: State = { foo: '' }, action): State => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

export default reducer
