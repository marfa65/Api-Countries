import axios from "axios";

export default function postActivity(data) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/activity`, data);
    } catch (error) {
      return error;
    }
  };
}
