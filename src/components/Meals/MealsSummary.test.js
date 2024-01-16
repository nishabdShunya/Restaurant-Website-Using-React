import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealsSummary from "./MealsSummary";

test("MealsSummary component is rendered as expected", () => {
  render(<MealsSummary />);
  const headerElement = screen.getByText(/Delicious Food, Delivered To You/i);
  expect(headerElement).toBeInTheDocument();
});
