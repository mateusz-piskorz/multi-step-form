import { screen, render } from '@testing-library/react';
import { Input } from './index';

const register = jest.fn();
const defaultProps = {
  register,
  name: 'name',
  autoFocus: false,
  label: 'label',
  placeholder: 'placeholder',
  type: 'text',
  errorMessage: 'error message',
} as const;

describe('Input', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays label', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
  });

  it('displays placeholder text', () => {
    render(<Input {...defaultProps} />);
    expect(
      screen.getByPlaceholderText(defaultProps.placeholder),
    ).toBeInTheDocument();
  });

  it('displays input type', () => {
    render(<Input {...defaultProps} />);
    expect(
      screen.getByPlaceholderText(defaultProps.placeholder),
    ).toHaveAttribute('type', defaultProps.type);
  });

  it('displays error message', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByText(defaultProps.errorMessage)).toBeInTheDocument();
  });

  it('autoFocus input', () => {
    render(<Input {...defaultProps} autoFocus />);
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toHaveFocus();
  });

  it('calls register', () => {
    render(<Input {...defaultProps} />);
    expect(register).toHaveBeenCalledWith(defaultProps.name);
  });
});
