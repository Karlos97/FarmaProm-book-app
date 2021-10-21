import { SET_NOTIFICATION } from "../actions/actionsType";

export function notificationReducer(state = {}, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
