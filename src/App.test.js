import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App component is rendered as expected", () => {
  render(<App />);
  const headerElement = screen.getByText(/Delicious Food, Delivered To You/i);
  expect(headerElement).toBeInTheDocument();
});
