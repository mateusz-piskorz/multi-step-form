import { Navigation } from "./index";
import { screen, render } from "@testing-library/react";

const defaultProps = {
  back: jest.fn(),
  next: jest.fn(),
  isFirstStep: false,
  isLastStep: false,
};

it("doesn't display back button if first step", () => {
  render(<Navigation {...defaultProps} isFirstStep={true} />);
  expect(screen.queryByText("Go Back")).toBeNull();
});

it("calls back func on button click", () => {
  render(<Navigation {...defaultProps} />);
  screen.getByText("Go Back").click();
  expect(defaultProps.back).toHaveBeenCalled();
});

it("displays finish button if last step", () => {
  render(<Navigation {...defaultProps} isLastStep={true} />);
  expect(screen.getByText("Finish")).toHaveAttribute("type", "submit");
});
