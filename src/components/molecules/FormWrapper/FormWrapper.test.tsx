import { screen, render } from '@testing-library/react';
import { FormWrapper } from '.';

const defaultProps = {
  description: 'description',
  title: 'title',
};

it('displays description', () => {
  render(<FormWrapper {...defaultProps} />);
  expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
});

it('displays title', () => {
  render(<FormWrapper {...defaultProps} />);
  expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
});
