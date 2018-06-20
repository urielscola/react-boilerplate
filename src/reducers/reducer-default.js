import { ACTION_TYPE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPE:
        return { ...state };
    default:
      return state;
  }
}