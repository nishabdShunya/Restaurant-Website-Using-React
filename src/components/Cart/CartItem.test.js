import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

jest.mock("../../store/cart-context");

const CustomCartProvider = ({ children, value }) => (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
);

describe("CartItem Component", () => {
  test("handles minus click as expected", () => {
    const mockRemoveItem = jest.fn();

    render(
      <CustomCartProvider value={{ removeItem: mockRemoveItem }}>
        <CartItem id={1} name="Item 1" price={10} quantity={2} />
      </CustomCartProvider>
    );

    fireEvent.click(screen.getByText("-"));
    expect(mockRemoveItem).toHaveBeenCalledWith(1);
  });

  test("handles plus click as expected", () => {
    const mockAddItem = jest.fn();

    render(
      <CustomCartProvider value={{ addItem: mockAddItem }}>
        <CartItem id={1} name="Item 1" price={10} quantity={2} />
      </CustomCartProvider>
    );

    fireEvent.click(screen.getByText("+"));
    expect(mockAddItem).toHaveBeenCalledWith({
      id: 1,
      name: "Item 1",
      price: 10,
      quantity: 1,
    });
  });
});
