/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";

const mockCartItem = {
  name: "Product 1",
  price: 10.99,
  quantity: 2,
};

test("CartItem component is rendered as expected", () => {
  render(<CartItem {...mockCartItem} />);
  expect(screen.getByText(mockCartItem.name)).toBeInTheDocument();
  expect(screen.getByText(`$ ${mockCartItem.price}`)).toBeInTheDocument();
  expect(screen.getByText(`x ${mockCartItem.quantity}`)).toBeInTheDocument();
  expect(document.querySelector("li")).toHaveClass("cart-item");
});
