import { ORDER_CONTINENT } from "./index";

export default function orderContinent(data) {
  return {
    type: ORDER_CONTINENT,
    payload: data,
  };
}
