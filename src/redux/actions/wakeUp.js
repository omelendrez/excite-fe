export const WAKE_UP_REQUEST = "WAKE_UP_REQUEST";
export const WAKE_UP_SUCCESS = "WAKE_UP_SUCCESS";
export const WAKE_UP_FAILED = "WAKE_UP_FAILED";

export const wakeUp = () => {
  return {
    type: WAKE_UP_REQUEST,
  };
};
