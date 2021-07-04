import * as types from "redux/actions";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const wakeUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WAKE_UP_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.WAKE_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case types.WAKE_UP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default wakeUpReducer;
