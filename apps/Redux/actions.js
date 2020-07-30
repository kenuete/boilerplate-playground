import store from './store'
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
// store.dispatch(setName)
// store.dispatch(setPlace)

// sync action creators
const setNameAction = () => store.dispatch(setName)
store.dispatch(setNameAction)

// async action creators
// they will return a function which gets executed by the middleware.
// the middleware also pass in the dispatch and getState method
// to the returned function
const sampleAction = () => (dispatch, getState) => {
  console.log('current state is ', getState())
  return new Promise((resolve, reject) => {
    dispatch(setPlace) // this is synchronous, that's why promise works here
    resolve()
  })
}
store.dispatch(sampleAction()).then(() => console.log('redux update finished!'))
