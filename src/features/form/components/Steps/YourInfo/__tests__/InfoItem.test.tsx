import { render, screen, fireEvent } from "@testing-library/react";
import { InfoItem } from "../InfoItem";

const propsG = {
  inputValue: "inputValue",
  label: "label",
  placeholder: "placeholder value",
};

test("renders text input with onChange function", () => {
  const mockFunction = jest.fn();
  const props = {
    ...propsG,
    type: "text",
  } as const;
  render(<InfoItem {...props} onChangeHandler={mockFunction} />);

  const label = screen.getByText(props.label);
  const input = screen.getByLabelText(props.label, { selector: "input" });

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue(props.inputValue);
  expect(input).toHaveAttribute("placeholder", props.placeholder);
  expect(input).toHaveAttribute("type", props.type);
  fireEvent.change(input, { target: { value: "changed value" } });
  expect(mockFunction).toBeCalled();
});

test("renders email form", () => {
  const mockFunction = jest.fn();
  const props = {
    ...propsG,
    type: "email",
  } as const;
  render(<InfoItem {...props} onChangeHandler={mockFunction} />);

  const label = screen.getByText(props.label);
  const input = screen.getByLabelText(props.label, { selector: "input" });

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", props.type);
});

test("renders phone form", () => {
  const mockFunction = jest.fn();
  const props = {
    ...propsG,
    type: "tel",
  } as const;
  render(<InfoItem {...props} onChangeHandler={mockFunction} />);

  const label = screen.getByText(props.label);
  const input = screen.getByLabelText(props.label, { selector: "input" });

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", props.type);
});
