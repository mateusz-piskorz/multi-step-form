import { render, screen } from "@testing-library/react";
import { PaymentPeriod } from "./index";
import { useForm } from "../../../../context";

const CheckboxProps = jest.fn();
jest.mock("../Checkbox", () => ({
  Checkbox: jest.fn((props) => CheckboxProps(props)),
}));

it("displays Monthly", () => {
  render(<PaymentPeriod />);
  expect(screen.getByText("Monthly")).toBeInTheDocument();
});

it("displays Yearly", () => {
  render(<PaymentPeriod />);
  expect(screen.getByText("Yearly")).toBeInTheDocument();
});

it("displays unchecked Checkbox", () => {
  render(<PaymentPeriod />);
  expect(CheckboxProps).toHaveBeenCalledWith(
    expect.objectContaining({ isChecked: false })
  );
});

it("displays checked Checkbox if period is yearly", () => {
  (useForm as jest.Mock<any>).mockReturnValue({
    watch: () => {
      "yearly";
    },
  });
  render(<PaymentPeriod />);
  expect(CheckboxProps).toHaveBeenCalledWith(
    expect.objectContaining({ isChecked: false })
  );
});
