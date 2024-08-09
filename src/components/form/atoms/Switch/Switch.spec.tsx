import { Switch } from './index';
import { render, screen } from '@testing-library/react';

const register = jest.fn();
const defaultProps = {
  defaultChecked: false,
  register,
  name: 'mockedName',
  ariaLabel: 'mockedAriaLabel',
};

describe('Switch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays Switch checkbox unchecked by default', () => {
    render(<Switch {...defaultProps} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('displays Switch checkbox checked', () => {
    render(<Switch {...defaultProps} defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls register', () => {
    render(<Switch {...defaultProps} defaultChecked />);
    expect(register).toHaveBeenCalledWith(defaultProps.name);
  });
});
