import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvailableMeals from "./AvailableMeals";

test("AvailableMeals component is rendered as expected", () => {
  render(<AvailableMeals />);
  const sushiElement = screen.getByText(/Sushi/i);
  expect(sushiElement).toBeInTheDocument();
});
