import axios from "axios";
import { GET_BY_NAME } from "./index";

/**
 * esta funcion hace fdlksgdlkjslkgslv
 * @returns
 */
export default function getByName(name) {
  // console.log("nombreeeeeee", name);
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries/?name=${name}`);
    return dispatch({
      type: GET_BY_NAME,
      payload: json.data,
    });
  };
}
