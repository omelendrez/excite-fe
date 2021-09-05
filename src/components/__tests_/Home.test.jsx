// src/test/Home.test.jsx
import React from "react";
// Replace this with the appropriate location of your component
import Home from "../Home";
// Replace this with the appropriate location of your testing utility
import renderConnected from "../../utils/test/renderConnected";

describe("<Home/>", () => {
  let wrapper, getByText;
  const initialState = {
    // ... Add your initial testing state here
  };

  beforeEach(() => {
    const utils = renderConnected(<Home />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
  });

  it("renders the component", () => {
    expect(wrapper.querySelector(".home")).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
