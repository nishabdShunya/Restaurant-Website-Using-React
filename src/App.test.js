import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App component is rendered as expected", () => {
  render(<App />);
  const headerElement = screen.getByText(/ReactMeals/i);
  expect(headerElement).toBeInTheDocument();
});
