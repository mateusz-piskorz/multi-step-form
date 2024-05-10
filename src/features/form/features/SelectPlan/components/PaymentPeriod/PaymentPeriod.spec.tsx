import { render, screen } from "@testing-library/react";
import { PaymentPeriod } from "./index";

const defaultProps = {
  paymentPeriod: "monthly",
  setPaymentPeriod: jest.fn(),
} as const;

jest.mock("../Checkbox", () => ({
  Checkbox: jest.fn(() => <div data-testId="Checkbox" />),
}));

it("displays Monthly", () => {
  render(<PaymentPeriod {...defaultProps} />);
  expect(screen.getByText("Monthly")).toBeInTheDocument();
});

it("displays Yearly", () => {
  render(<PaymentPeriod {...defaultProps} />);
  expect(screen.getByText("Yearly")).toBeInTheDocument();
});

it("displays Checkbox", () => {
  render(<PaymentPeriod {...defaultProps} />);
  expect(screen.getByTestId("Checkbox")).toBeInTheDocument();
});
