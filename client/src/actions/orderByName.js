import { ORDER_BY_NAME } from "./index";

export default function orderByName(data) {
  // console.log("accion", data);
  return {
    type: ORDER_BY_NAME,
    payload: data,
  };
}
