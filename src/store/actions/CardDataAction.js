import { SHOW_LIST_DATA } from "./types";


export const showList = () => dispatch => {

  dispatch({
    type: SHOW_LIST_DATA,
  })

}
