/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

beforeAll(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
});

test("clicking on backdrop hides the cart", () => {
  const backdropClickMock = jest.fn();
  render(<Modal onBackdropClick={backdropClickMock}>Modal Content</Modal>);
  expect(screen.getByText("Modal Content")).toBeInTheDocument();
  fireEvent.click(document.querySelector(".backdrop"));
  expect(backdropClickMock).toHaveBeenCalledTimes(1);
});
