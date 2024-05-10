import { PlanItem } from "./index";
import { screen, render } from "@testing-library/react";

const defaultProps = {
  paymentPeriod: "monthly",
  plan: { cost: { monthly: 20, yearly: 200 }, name: "arcade" },
  register: jest.fn(),
} as const;

const CostProps = jest.fn();
jest.mock("../../../Cost", () => ({
  Cost: jest.fn((props) => CostProps(props)),
}));

it("displays radio input", () => {
  render(<PlanItem {...defaultProps} />);
  expect(screen.getByRole("radio")).toBeInTheDocument();
});

it("displays plan name", () => {
  render(<PlanItem {...defaultProps} />);
  expect(screen.getByText("Arcade")).toBeInTheDocument();
});

it("displays plan icon", () => {
  render(<PlanItem {...defaultProps} />);
  expect(
    screen.getByAltText(`${defaultProps.plan.name} plan icon`)
  ).toBeInTheDocument();
});

it("displays Cost", () => {
  render(<PlanItem {...defaultProps} />);
  expect(CostProps).toHaveBeenCalledWith({
    cost: defaultProps.plan.cost.monthly,
    period: defaultProps.paymentPeriod,
  });
});

it("displays Cost yearly", () => {
  render(<PlanItem {...defaultProps} paymentPeriod="yearly" />);
  expect(CostProps).toHaveBeenCalledWith({
    cost: defaultProps.plan.cost.yearly,
    period: "yearly",
  });
});
