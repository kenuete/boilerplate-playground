// reducers
export const reducerForName = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          value: action.value,
        }
      default: return state
    }
  }
  
export const reducerForPlace = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PLACE':
        return {
          ...state,
          value: action.value,
        }
      default: return state
    }
  }