import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducerForName, reducerForPlace } from './reducer'

const loggerMiddleware = createLogger()

const combinedState = {
  name: reducerForName,
  place: reducerForPlace,
}
// store
export default createStore(
  combineReducers(combinedState),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions)
  ),
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
