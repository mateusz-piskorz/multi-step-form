import { Checkbox } from "./index";
import { render, screen } from "@testing-library/react";

it("displays checked checkbox", () => {
  render(<Checkbox isChecked onCheck={jest.fn()} />);
  expect(screen.getByRole("checkbox")).toBeChecked();
});

it("calls onCheck func", () => {
  const onCheck = jest.fn();
  render(<Checkbox isChecked onCheck={onCheck} />);
  screen.getByRole("checkbox").click();
  expect(onCheck).toHaveBeenCalled();
});
