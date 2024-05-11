import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryItem } from "../SummaryItem";

test("renders a service summary", () => {
  const service = "onlineService";
  render(
    <SummaryItem
      cost={20}
      itemCase="service"
      period="monthly"
      displayedService={service}
    />
  );

  const paragraph = screen.getByText(service);
  expect(paragraph).toBeInTheDocument();
});

test("renders a total summary", () => {
  render(<SummaryItem cost={20} itemCase="total" period="monthly" />);

  const paragraph = screen.getByText("Total (per month)");
  expect(paragraph).toBeInTheDocument();
});

test("renders a heading summary", () => {
  const mockFunction = jest.fn();

  render(
    <SummaryItem
      cost={150}
      itemCase="heading"
      period="monthly"
      selectedPlan="arcade"
      backToPlanSelection={mockFunction}
    />
  );

  const heading = screen.getByRole("heading", { level: 2 });
  const goBackButton = screen.getByText("Change");
  expect(goBackButton).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Arcade (Monthly)");
  goBackButton.click();
  expect(mockFunction).toBeCalled();
});
