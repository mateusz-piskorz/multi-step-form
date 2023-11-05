import { screen, render } from "@testing-library/react";
import { AddOnItem } from "../AddOnItem";
import { addons } from "../data";

test("renders heading text for addon", () => {
  const headingText = addons.customizableProfile.description.h2;
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="customizableProfile"
      isChecked={false}
      onCheck={mockFunction}
      paymentPeriod="monthly"
    />
  );

  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(headingText);
});

test("renders description text for addon", () => {
  const descriptionText = addons.customizableProfile.description.p;
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="customizableProfile"
      isChecked={false}
      onCheck={mockFunction}
      paymentPeriod="monthly"
    />
  );

  const paragraph = screen.getByText(descriptionText);
  expect(paragraph).toBeInTheDocument();
});

test("renders checkbox for addon", () => {
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="customizableProfile"
      isChecked={false}
      onCheck={mockFunction}
      paymentPeriod="monthly"
    />
  );

  const input = screen.getByRole("checkbox");
  expect(input).toBeInTheDocument();
  expect(input).not.toBeChecked();
});

test("renders checked checkbox for addon", () => {
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="customizableProfile"
      isChecked={true}
      onCheck={mockFunction}
      paymentPeriod="monthly"
    />
  );

  const input = screen.getByRole("checkbox");
  expect(input).toBeInTheDocument();
  expect(input).toBeChecked();
});

test("renders a monthly price", () => {
  const price = addons.onlineService.cost.monthly;
  const priceText = `+$${price}/mo`;
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="onlineService"
      isChecked={false}
      onCheck={mockFunction}
      paymentPeriod="monthly"
    />
  );

  const costParagraph = screen.getByText(priceText);
  expect(costParagraph).toBeInTheDocument();
});

test("renders a yearly price", () => {
  const price = addons.onlineService.cost.yearly;
  const priceText = `+$${price}/yr`;
  const mockFunction = jest.fn();
  render(
    <AddOnItem
      displayedAddOn="onlineService"
      isChecked={false}
      onCheck={mockFunction}
      paymentPeriod="yearly"
    />
  );

  const costParagraph = screen.getByText(priceText);
  expect(costParagraph).toBeInTheDocument();
});
