import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import CartContext from "../../store/cart-context";

const CustomCartProvider = ({ children, value }) => (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
);

beforeAll(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
});

test("Cart Component calculates totalAmount correctly", async () => {
  const mockCartItems = [
    { id: 1, name: "Item 1", quantity: 2, price: 10 },
    { id: 2, name: "Item 2", quantity: 1, price: 20 },
  ];

  render(
    <CustomCartProvider value={{ items: mockCartItems }}>
      <Cart onCloseCart={() => {}} />
    </CustomCartProvider>
  );

  const expectedTotalAmount = mockCartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  await waitFor(() => {
    const totalAmountElement = screen.getByText(
      `$${expectedTotalAmount.toFixed(2)}`
    );
    expect(totalAmountElement).toBeInTheDocument();
  });
});
