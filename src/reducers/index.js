import { combineReducers } from "redux";
import defaultReducar from "./reducer-default";

const rootReducer = combineReducers({
  state: defaultReducar
});

export default rootReducer;