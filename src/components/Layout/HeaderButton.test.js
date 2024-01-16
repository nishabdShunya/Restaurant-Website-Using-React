import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderButton from "./HeaderButton";

test("HeaderButton component is rendered as expected", () => {
  render(<HeaderButton />);
  const buttonText = screen.getByText(/Your Cart/i);
  const badgeElement = screen.getByText("0");

  expect(buttonText).toBeInTheDocument();
  expect(badgeElement).toBeInTheDocument();
});
