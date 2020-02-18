import { GET_RANGE, GET_WEEK } from "../actions/types";
import moment from 'moment';

const initialState = {

  today: moment().weekday(0).format('YYYYMMDD'),
  range: '',
  week: []

}

export default (state = initialState, action) => {

  switch (action.type) {

    case GET_RANGE:
      return {
        ...state,
        range: action.payload
      };
    case GET_WEEK:
      return {
        ...state,
        week: action.payload
      };
    default:
      return state;
  }

}