import axios from "axios";
import { GET_BY_NAME } from "./index";

export default function getByName(name) {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries/?name=${name}`);
    return dispatch({
      type: GET_BY_NAME,
      payload: json.data,
    });
  };
}
