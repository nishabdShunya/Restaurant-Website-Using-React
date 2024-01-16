import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealItem from "./MealItem";

test("MealItem component is rendered as expected", () => {
  render(
    <MealItem
      name="Sushi"
      description="Finest fish and veggies"
      price={22.99}
    />
  );

  expect(screen.getByText("Sushi")).toBeInTheDocument();
  expect(screen.getByText("Finest fish and veggies")).toBeInTheDocument();
  expect(screen.getByText("$22.99")).toBeInTheDocument();
});
