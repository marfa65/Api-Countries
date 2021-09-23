import axios from "axios";
import { GET_BY_ID } from "./index";

/**
 * esta funcion hace fdlksgdlkjslkgslv
 * @returns
 */
export default function getById(id) {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries/${id}`);

    return dispatch({
      type: GET_BY_ID,
      payload: json.data,
    });
  };
}
