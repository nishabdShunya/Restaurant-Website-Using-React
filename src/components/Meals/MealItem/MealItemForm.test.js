import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealItemForm from "./MealItemForm";

test("MealItemForm component is rendered as expected", () => {
  render(<MealItemForm id="1" />);
  expect(screen.getByLabelText("Quantity")).toBeInTheDocument();
  expect(screen.getByText("+ Add")).toBeInTheDocument();
});
