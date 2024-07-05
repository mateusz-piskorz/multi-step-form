import { screen, render } from '@testing-library/react';
import { InfoInput } from './index';

const defaultProps = {
  label: 'label',
  name: 'name',
  placeholder: 'placeholder',
  type: 'text',
} as const;

it('displays label', () => {
  render(<InfoInput {...defaultProps} />);
  expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
});

it('displays input text', () => {
  render(<InfoInput {...defaultProps} />);
  expect(screen.getByPlaceholderText(defaultProps.placeholder)).toHaveAttribute(
    'type',
    defaultProps.type,
  );
});

it('displays input email', () => {
  const type = 'email';
  render(<InfoInput {...defaultProps} type={type} />);
  expect(screen.getByPlaceholderText(defaultProps.placeholder)).toHaveAttribute(
    'type',
    type,
  );
});

it('displays input tel', () => {
  const type = 'tel';
  render(<InfoInput {...defaultProps} type={type} />);
  expect(screen.getByPlaceholderText(defaultProps.placeholder)).toHaveAttribute(
    'type',
    type,
  );
});
