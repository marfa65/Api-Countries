import axios from "axios";
import { GET_COUNTRIES } from "./index";

export default function getCountries() {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries`);

    return dispatch({
      type: GET_COUNTRIES,
      payload: json.data,
    });
  };
}
