import { ACTUAL_PAGE } from "./index";

export default function paged(page) {
  return {
    type: ACTUAL_PAGE,
    payload: page,
  };
}
