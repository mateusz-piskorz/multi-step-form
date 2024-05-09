import { Navigation } from "./index";
import { screen, render } from "@testing-library/react";

const defaultProps = {
  back: jest.fn(),
  next: jest.fn(),
  isFirstStep: false,
  isLastStep: false,
};

it("works", () => {
  render(<Navigation {...defaultProps} />);
  expect(true).toBe(true);
});
