import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("Header component is rendered as expected", () => {
  render(<Header />);
  const headerTitle = screen.getByText(/ReactMeals/i);
  const mealsImage = screen.getByAltText("meals");

  expect(headerTitle).toBeInTheDocument();
  expect(mealsImage).toBeInTheDocument();
});
