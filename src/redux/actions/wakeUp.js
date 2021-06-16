import * as types from "redux/types";

export const wakeUp = () => {
  return {
    type: types.WAKE_UP_REQUEST,
  };
};
