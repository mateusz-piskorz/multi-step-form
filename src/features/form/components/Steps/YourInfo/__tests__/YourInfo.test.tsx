import { render, screen } from "@testing-library/react";
import { YourInfo } from "../index";

test("renders empty user form", () => {
  const mockFunciton = jest.fn();
  render(
    <YourInfo email="" name="" phoneNumber="" updateFields={mockFunciton} />
  );

  const nameLabel = screen.getByText("Name");
  const nameInput = screen.getByLabelText("Name", { selector: "input" });
  const emailLabel = screen.getByText("Email Address");
  const emailInput = screen.getByLabelText("Email Address", {
    selector: "input",
  });
  const phoneLabel = screen.getByText("Phone Number");
  const phoneInput = screen.getByLabelText("Phone Number", {
    selector: "input",
  });

  expect(nameLabel).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveValue("");

  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveValue("");

  expect(phoneLabel).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(phoneInput).toHaveValue("");
});

test("renders user form with default values", () => {
  const mockFunction = jest.fn();
  const email = "emailTest@spoko.pl";
  const name = "John";
  const phoneNumber = "1453321432";
  render(
    <YourInfo
      email={email}
      name={name}
      phoneNumber={phoneNumber}
      updateFields={mockFunction}
    />
  );

  const nameInput = screen.getByLabelText("Name", { selector: "input" });
  const emailInput = screen.getByLabelText("Email Address", {
    selector: "input",
  });
  const phoneInput = screen.getByLabelText("Phone Number", {
    selector: "input",
  });

  expect(nameInput).toHaveValue(name);
  expect(emailInput).toHaveValue(email);
  expect(phoneInput).toHaveValue(phoneNumber);
});
