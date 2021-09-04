import React from "react";
import { Provider } from "react-redux";
import Home from "../Home";
import renderer from "react-test-renderer";
import store from "redux/store";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
