import { combineReducers } from "redux";
import CardDataReducer from "./CardDataReducer";
import ScheduleReducer from "./ScheduleReducer";

export default combineReducers({
    list: CardDataReducer,
    date: ScheduleReducer
  

});