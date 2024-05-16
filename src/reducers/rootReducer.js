import { combineReducers } from "redux";
import menuReducer from "./menu.reducer";
import location from "./menu.location.reducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  location: location,
});

export default rootReducer;
