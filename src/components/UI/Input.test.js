import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

test("Input component is rendered as expected", () => {
  render(
    <Input label="Test Label" inputConfig={{ id: "test_id", type: "text" }} />
  );
  expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
});
