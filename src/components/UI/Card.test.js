import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

test("Card component is rendered as expected", () => {
  render(<Card>Test Content</Card>);
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});
