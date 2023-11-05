import React from "react";
import { render, screen } from "@testing-library/react";
import { AddOns } from "../index";

test("renders all addons", () => {
  const mockFunction = jest.fn();
  render(
    <AddOns
      updateFields={mockFunction}
      paymentPeriod="monthly"
      customizableProfile={true}
      largerStorage={true}
      onlineService={false}
    />
  );

  const input = screen.getAllByRole("checkbox");
  expect(input.length).toBe(3);
});
