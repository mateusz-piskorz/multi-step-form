import { screen, render } from "@testing-library/react";
import { PlanItem } from "../PlanItem";
import icon from "../../../../assets/icon-advanced.svg";

test("renders image", () => {
  const mockFunction = jest.fn();
  render(
    <PlanItem
      displayedPlan="advanced"
      paymentPeriod="monthly"
      selectedPlan="advanced"
      updateFields={mockFunction}
    />
  );

  const img = screen.getByRole("img") as HTMLImageElement;

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", icon);
});

test("renders heading with plan name", () => {
  const mockFunction = jest.fn();
  render(
    <PlanItem
      displayedPlan="advanced"
      paymentPeriod="monthly"
      selectedPlan="arcade"
      updateFields={mockFunction}
    />
  );
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Advanced");
});
