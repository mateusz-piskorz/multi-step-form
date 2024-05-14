import { render, screen } from "@testing-library/react";
import { SummaryItem } from "./index";
import { useForm } from "../../../../context";

const defaultProps = {
  cost: 150,
  text: "textTest",
};

const CostProps = jest.fn();
jest.mock("../../../Cost", () => ({
  Cost: jest.fn((props) => CostProps(props)),
}));

it("displays Cost", () => {
  render(<SummaryItem {...defaultProps} />);
  expect(CostProps).toHaveBeenCalledWith({
    bold: undefined,
    cost: 150,
    gray: true,
    period: "monthly",
  });
});

it("displays Cost bold", () => {
  render(<SummaryItem {...defaultProps} boldCost />);
  expect(CostProps).toHaveBeenCalledWith({
    bold: true,
    cost: 150,
    gray: false,
    period: "monthly",
  });
});

it("displays Cost yearly", () => {
  (useForm as jest.Mock<any>).mockReturnValue({ watch: () => "yearly" });
  render(<SummaryItem {...defaultProps} />);
  expect(CostProps).toHaveBeenCalledWith({
    bold: undefined,
    cost: 150,
    gray: true,
    period: "yearly",
  });
});

it("displays text", () => {
  render(<SummaryItem {...defaultProps} />);
  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
});

it("displays Change button", () => {
  const backToPlanSelection = jest.fn();
  render(
    <SummaryItem {...defaultProps} backToPlanSelection={backToPlanSelection} />
  );
  screen.getByRole("button", { name: "Change" }).click();
  expect(backToPlanSelection).toHaveBeenCalled();
});
