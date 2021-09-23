import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_ACTIVITIES,
  GET_BY_ID,
  ACTUAL_PAGE,
} from "../actions/index.js";

const initialState = {
  countries: [],
  activities: [],
  detail: [],
  page: 1,
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
    case GET_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case ACTUAL_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
}
