import { GET_COUNTRIES } from "../actions";
import { GET_BY_NAME } from "../actions";
const initialState = {
  countries: [],
  activities: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}
