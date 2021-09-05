import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Replace this with the appropriate imports for your project
import { initialState as reducerInitialState } from "redux/store";
import rootReducer from "redux/reducers";

const renderConnected = (
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
