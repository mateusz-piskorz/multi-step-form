import { screen, render } from "@testing-library/react";
import { FormWrapper } from "../FormWrapper";

test("renders description", () => {
  const description = "description test";
  render(<FormWrapper description={description} title="title" />);

  const descriptionP = screen.getByText(description);
  expect(descriptionP).toBeInTheDocument();
});

test("renders title", () => {
  const title = "title test";
  render(<FormWrapper description="description" title={title} />);

  const descriptionP = screen.getByText(title);
  expect(descriptionP).toBeInTheDocument();
});
