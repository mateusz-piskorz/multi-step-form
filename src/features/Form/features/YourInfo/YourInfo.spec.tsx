import { YourInfo } from "./index";
import { render, screen, waitFor } from "@testing-library/react";

const InfoInputProps = jest.fn();
jest.mock("./components/InfoInput", () => ({
  InfoInput: jest.fn((props) => InfoInputProps(props)),
}));

const FormWrapperProps = jest.fn();
jest.mock("../../layouts/FormWrapper", () => ({
  FormWrapper: jest.fn(({ children, ...props }) => {
    FormWrapperProps(props);
    return <>{children}</>;
  }),
}));

it("displays FormWrapper", async () => {
  render(<YourInfo />);
  expect(FormWrapperProps).toHaveBeenCalledWith({
    description: "Please provide your name, email address, and phone number.",
    title: "Personal info",
  });
});

it("displays InfoInput", async () => {
  render(<YourInfo />);
  expect(InfoInputProps).toHaveBeenCalledWith(
    expect.objectContaining({
      label: "Name",
      name: "name",
      placeholder: "e.g. Stephen King",
      type: "text",
    })
  );
  expect(InfoInputProps).toHaveBeenCalledWith(
    expect.objectContaining({
      label: "Email Address",
      name: "email",
      placeholder: "e.g. stephenking@lorem.com",
      type: "email",
    })
  );
  expect(InfoInputProps).toHaveBeenCalledWith(
    expect.objectContaining({
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "e.g. +1 234 567 890",

      type: "tel",
    })
  );
});
