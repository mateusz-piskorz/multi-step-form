import { render, screen } from "@testing-library/react";
import { PaymentPeriod } from "./index";

jest.mock("../Checkbox", () => ({
  Checkbox: jest.fn(() => <div data-testId="Checkbox" />),
}));

it("displays Monthly", () => {
  render(<PaymentPeriod />);
  expect(screen.getByText("Monthly")).toBeInTheDocument();
});

it("displays Yearly", () => {
  render(<PaymentPeriod />);
  expect(screen.getByText("Yearly")).toBeInTheDocument();
});

it("displays Checkbox", () => {
  render(<PaymentPeriod />);
  expect(screen.getByTestId("Checkbox")).toBeInTheDocument();
});
