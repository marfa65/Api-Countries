import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_ACTIVITIES,
  GET_BY_ID,
  ACTUAL_PAGE,
  ORDER_CONTINENT,
  ORDER_POPULATION,
  ORDER_BY_NAME,
  ORDER_ACTIVITY,
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

    case ORDER_CONTINENT:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_POPULATION:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_ACTIVITY:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_BY_NAME:
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
