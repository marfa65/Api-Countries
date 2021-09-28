import { ORDER_BY_NAME } from "./index";

export default function orderByName(data) {
  return {
    type: ORDER_BY_NAME,
    payload: data,
  };
}
