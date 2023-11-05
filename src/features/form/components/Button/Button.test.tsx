import { render, screen } from "@testing-library/react";
import { Button } from "./index";

test("renders a button", () => {
  const text = "My button";
  const typeAttr = "button";
  render(<Button type={typeAttr}>{text}</Button>);

  const button = screen.getByRole("button", { name: text });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("type", typeAttr);
});

test("renders a submit button", () => {
  const text = "My button";
  const typeAttr = "submit";
  render(<Button type={typeAttr}>{text}</Button>);

  const button = screen.getByRole("button", { name: text });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("type", typeAttr);
});

test("renders a ReactNode children", () => {
  const H2Text = "H2 with text";
  render(
    <Button type="button">
      <h2>{H2Text}</h2>
    </Button>
  );

  const heading = screen.getByRole("heading", { level: 2, name: H2Text });
  expect(heading).toBeInTheDocument();
});

test("renders a button with onClick function", () => {
  const text = "My button";
  const onClickHandler = jest.fn();
  render(
    <Button type="button" onClick={onClickHandler}>
      {text}
    </Button>
  );

  const button = screen.getByRole("button", { name: text });
  expect(button).toBeInTheDocument();
  button.click();
  expect(onClickHandler).toBeCalled();
});
