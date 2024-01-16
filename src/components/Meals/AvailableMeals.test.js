import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvailableMeals from "./AvailableMeals";

test("AvailableMeals component is rendered as expected", () => {
  render(<AvailableMeals />);

  expect(screen.getByText("Sushi")).toBeInTheDocument();
  expect(screen.getByText("Schnitzel")).toBeInTheDocument();
  expect(screen.getByText("Barbecue Burger")).toBeInTheDocument();
  expect(screen.getByText("Green Bowl")).toBeInTheDocument();
});
