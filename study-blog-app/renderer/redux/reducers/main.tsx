import { AnyAction } from "redux";
import * as t from "../types";

const main = (
  state = {
    user : null,
  },
  action: AnyAction
) => {
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;