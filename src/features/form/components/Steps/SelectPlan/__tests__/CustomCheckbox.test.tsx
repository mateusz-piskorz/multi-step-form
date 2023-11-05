import { screen, render } from "@testing-library/react";
import { CustomCheckbox } from "../CustomCheckbox";

test("renders checkbox input", () => {
  const mockFunction = jest.fn();
  render(<CustomCheckbox isChecked={false} onCheck={mockFunction} />);

  const input = screen.getByRole("checkbox", { hidden: true });
  expect(input).toBeInTheDocument();
  expect(input).not.toBeChecked();

  input.click();
  expect(mockFunction).toBeCalled();
});

test("renders checked checkbox input", () => {
  const mockFunction = jest.fn();
  render(<CustomCheckbox isChecked={true} onCheck={mockFunction} />);

  const input = screen.getByRole("checkbox", { hidden: true });
  expect(input).toBeInTheDocument();
  expect(input).toBeChecked();
});
