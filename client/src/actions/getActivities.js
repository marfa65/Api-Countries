import axios from "axios";
import { GET_ACTIVITIES } from "./index";

export default function getActivities() {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/activity`);

    const act = json.data.map((e) => (e = e.name));

    let activity = new Set(act);

    let result = [...activity];
    result.sort();

    return dispatch({
      type: GET_ACTIVITIES,
      payload: result,
    });
  };
}
