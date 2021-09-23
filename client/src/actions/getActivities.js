// import { GET_ACTIVITIES } from "./index";

// export default function getActivities(result) {
//   return {
//     type: GET_ACTIVITIES,
//     payload: result,
//   };
// }

import axios from "axios";
import { GET_ACTIVITIES } from "./index";

/**
 * esta funcion hace fdlksgdlkjslkgslv
 * @returns
 */
export default function getCountries() {
  return async function (dispatch) {
    let json = await axios(`http://localhost:3001/countries`);

    const act = json.data.map((e) => (e = e.activities));
    // console.log('ACT', act)
    let activity = act.filter((e) => e.length > 0);
    // console.log('ACTIVITY', activity)

    activity = new Set(act.flat().map((e) => (e = e.name)));
    let result = [...activity];
    console.log("ACT2", result);

    return dispatch({
      type: GET_ACTIVITIES,
      payload: result,
    });
  };
}
