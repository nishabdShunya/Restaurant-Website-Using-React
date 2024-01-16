import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Meals from "./Meals";

test("Meals component is rendered as expected", () => {
  render(<Meals />);
  const mealsSummaryElement = screen.getByText(
    /Delicious Food, Delivered To You/i
  );
  expect(mealsSummaryElement).toBeInTheDocument();
});
