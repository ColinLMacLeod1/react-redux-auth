import { SIGNUP_REQUESTING } from './constants'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const reducer = function signupReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return {
        requesting: true,
        seccessful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      }
    default:
      return state
  }
}

export default reducer
