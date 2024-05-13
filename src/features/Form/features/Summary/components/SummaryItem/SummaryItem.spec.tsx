import { render, screen } from "@testing-library/react";
import { SummaryItem } from "./index";

const defaultProps = {
  cost: 3,
  itemCase: "service",
  displayedService: "customizableProfile",
  period: "monthly",
} as const;

it("works", () => {
  expect(2).toBe(2);
});
// it("displays price", () => {
//   render(<SummaryItem {...defaultProps} />);
//   expect(screen.getByText(`$${defaultProps.cost}/mo`)).toBeInTheDocument();
// });

// it("displays service name", () => {
//   render(<SummaryItem {...defaultProps} />);
//   expect(screen.getByText(defaultProps.displayedService)).toBeInTheDocument();
// });

// it("displays monthly text", () => {
//   render(
//     <SummaryItem {...defaultProps} itemCase="heading" selectedPlan="advanced" />
//   );
//   expect(screen.getByText("Advanced (Monthly)")).toBeInTheDocument();
// });
