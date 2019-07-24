import { createStore, combineReducers } from 'redux'

// reducers
const reducerForName = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        value: action.value,
      }
    default: return state
  }
}

const reducerForPlace = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLACE':
      return {
        ...state,
        value: action.value,
      }
    default: return state
  }
}

const combinedState = {
  name: reducerForName,
  place: reducerForPlace,
}
// store
const store = createStore(
  combineReducers(combinedState),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// action
const setName = {
  type: 'SET_NAME',
  value: 'John Doe',
}

const setPlace = {
  type: 'SET_PLACE',
  value: 'Melbourne',
}

// dispatch action
store.dispatch(setName)
store.dispatch(setPlace)

// action creators
