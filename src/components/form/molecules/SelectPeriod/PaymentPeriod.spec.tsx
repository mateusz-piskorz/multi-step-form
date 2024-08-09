import { render, screen } from '@testing-library/react';
import { SelectPeriod } from './index';

const register = jest.fn();
const defaultProps = {
  register,
  name: 'name',
} as const;

const Switch = jest.fn();
jest.mock('../../atoms/Switch', () => ({
  Switch: jest.fn((props) => Switch(props)),
}));

describe('SelectPeriod', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders Switch', () => {
    render(<SelectPeriod {...defaultProps} />);
    expect(Switch).toHaveBeenCalledWith({
      ariaLabel: 'yearly payment period',
      ...defaultProps,
    });
  });

  it('renders Switch with default checked', () => {
    render(<SelectPeriod {...defaultProps} checked />);
    expect(Switch).toHaveBeenCalledWith({
      ariaLabel: 'yearly payment period',
      defaultChecked: true,
      ...defaultProps,
    });
  });

  it('displays Monthly text', () => {
    render(<SelectPeriod {...defaultProps} checked />);
    expect(screen.getByText('Monthly')).toBeInTheDocument();
  });

  it('displays Yearly text', () => {
    render(<SelectPeriod {...defaultProps} checked />);
    expect(screen.getByText('Yearly')).toBeInTheDocument();
  });
});
