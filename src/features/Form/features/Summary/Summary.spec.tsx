import { Summary } from "./index";
import { render, screen, waitFor } from "@testing-library/react";

const FormWrapperProps = jest.fn();
jest.mock("../../layouts/FormWrapper", () => ({
  FormWrapper: jest.fn(({ children, ...props }) => {
    FormWrapperProps(props);
    return <>{children}</>;
  }),
}));

const SummaryItemProps = jest.fn();
jest.mock("./components/SummaryItem", () => ({
  SummaryItem: jest.fn(({ children, ...props }) => SummaryItemProps(props)),
}));

it("displays FormWrapper", async () => {
  render(<Summary backToPlanSelection={jest.fn()} />);
  expect(FormWrapperProps).toHaveBeenCalledWith({
    description: "Double-check everything looks OK before confirming.",
    title: "Finishing up",
  });
});

it("displays PlanItem", async () => {
  const backToPlanSelection = jest.fn();
  render(<Summary backToPlanSelection={backToPlanSelection} />);
  expect(SummaryItemProps).toHaveBeenCalledWith({
    backToPlanSelection,
    boldText: true,
    cost: 9,
    text: "arcade (monthly)",
  });

  expect(SummaryItemProps).toHaveBeenCalledWith({
    cost: 10,
    text: "Online service",
  });

  expect(SummaryItemProps).toHaveBeenCalledWith({
    boldCost: true,
    cost: 19,
    extraPadding: true,
    text: "Total (per month)",
  });
});
