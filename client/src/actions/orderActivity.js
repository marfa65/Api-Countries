import { ORDER_ACTIVITY } from "./index";

export default function orderActivity(data) {
  return {
    type: ORDER_ACTIVITY,
    payload: data,
  };
}
