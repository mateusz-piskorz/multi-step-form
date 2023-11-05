import { render, screen } from "@testing-library/react";
import { CostWithPeriod } from "./index";

test("renders a cost with monthly period", () => {
  const cost = 50;
  const period = "monthly";
  render(<CostWithPeriod cost={cost} period={period} />);

  const paragraph = screen.getByText(`+$${cost}/mo`);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph.tagName).toBe("P");
});

test("renders a cost with yearly period", () => {
  const cost = 40;
  const period = "yearly";
  render(<CostWithPeriod cost={cost} period={period} />);

  const paragraph = screen.getByText(`+$${cost}/yr`, { exact: false });
  expect(paragraph).toBeInTheDocument();
  expect(paragraph.tagName).toBe("P");
});
