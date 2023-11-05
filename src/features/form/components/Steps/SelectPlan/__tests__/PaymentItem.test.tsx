import { screen, render } from "@testing-library/react";
import { PlanItem } from "../PlanItem";
import icon from "../../../../assets/icon-advanced.svg";
import { plans } from "../data";
// <Button
//   $selected={selectedPlan === displayedPlan}
//   type="button"
//   onClick={() => updateFields({ selectedPlan: displayedPlan })}
// >
//   <img src={planIcon} alt={`${displayedPlan} plan icon`} />
//   <div>
//     <h2>{firstLetterUpperCase(displayedPlan)}</h2>
//     <CostWithPeriod cost={planCost} period={paymentPeriod} />
//   </div>
// </Button>;

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
