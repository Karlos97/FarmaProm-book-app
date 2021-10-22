import { SET_NOTIFICATION } from '../actions/actionsType';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
};

export default notificationReducer;
