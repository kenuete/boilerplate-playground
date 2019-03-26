import { createStore } from 'redux'

// reducers
const reducer = (state = {}, action) => ({
  ...state,
  value: action.value,
})

// store
const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// action
const setName = {
  type: 'SET_NAME',
  value: 'John Doe',
}

// dispatch action
store.dispatch(setName)

// action creators
