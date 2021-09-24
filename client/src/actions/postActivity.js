import axios from "axios";
// import { POST_ACTIVITY } from "./index";

export default function postActivity(data) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/activity`, data);
    } catch (error) {
      return error;
    }

    // console.log("get", json);

    // type: POST_ACTIVITY,
    // payload: data,
  };
}
