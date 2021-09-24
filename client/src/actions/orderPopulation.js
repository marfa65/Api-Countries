import { ORDER_POPULATION } from "./index";

export default function orderPopulation(data) {
  return {
    type: ORDER_POPULATION,
    payload: data,
  };
}
