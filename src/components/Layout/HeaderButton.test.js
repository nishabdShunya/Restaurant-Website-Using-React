import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderButton from "./HeaderButton";

test("clicking on the button in header opens the cart", () => {
  const openCartMock = jest.fn();
  render(<HeaderButton onClick={openCartMock} />);
  fireEvent.click(screen.getByText("Your Cart"));
  expect(openCartMock).toHaveBeenCalledTimes(1);
});
