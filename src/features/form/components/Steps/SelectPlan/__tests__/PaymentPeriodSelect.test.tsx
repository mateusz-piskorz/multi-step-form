import { screen, render } from "@testing-library/react";
import { PaymentPeriodSelect } from "../PaymentPeriodSelect";

test("renders monthly select", () => {
  const mockFunction = jest.fn();
  render(
    <PaymentPeriodSelect paymentPeriod="monthly" updateFields={mockFunction} />
  );

  const monthlyP = screen.getByText("Monthly");
  const yearlyP = screen.getByText("Yearly");

  expect(monthlyP).toBeInTheDocument();
  expect(yearlyP).toBeInTheDocument();
  expect(monthlyP).toHaveClass("selected");
  expect(yearlyP).not.toHaveClass("selected");
});

test("renders yearly select", () => {
  const mockFunction = jest.fn();
  render(
    <PaymentPeriodSelect paymentPeriod="yearly" updateFields={mockFunction} />
  );

  const monthlyP = screen.getByText("Monthly");
  const yearlyP = screen.getByText("Yearly");

  expect(monthlyP).toBeInTheDocument();
  expect(yearlyP).toBeInTheDocument();
  expect(monthlyP).not.toHaveClass("selected");
  expect(yearlyP).toHaveClass("selected");
});
