import React from "react";
import Home from "../Home";
import renderConnected from "../../utils/test/renderConnected";

describe("<Home/>", () => {
  let wrapper, getByText;
  const initialState = {};

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
