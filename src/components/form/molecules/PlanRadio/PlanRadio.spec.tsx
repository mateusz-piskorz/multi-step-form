import { PlanRadio } from './index';
import { screen, render } from '@testing-library/react';

const Cost = jest.fn();
jest.mock('../../atoms/Cost', () => ({
  Cost: jest.fn((props) => Cost(props)),
}));

const register = jest.fn();
const defaultProps = {
  paymentPeriod: 'monthly',
  plan: { cost: { monthly: 20, yearly: 200 }, name: 'arcade' },
  name: 'mockedName',
  register,
  autoFocus: false,
  isSelected: false,
} as const;

describe('PlanRadio', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays radio input', () => {
    render(<PlanRadio {...defaultProps} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('displays plan name', () => {
    render(<PlanRadio {...defaultProps} />);
    expect(screen.getByText(defaultProps.plan.name)).toBeInTheDocument();
  });

  it('displays plan icon', () => {
    render(<PlanRadio {...defaultProps} />);
    expect(
      screen.getByAltText(`${defaultProps.plan.name} plan icon`),
    ).toBeInTheDocument();
  });

  it('displays Cost', () => {
    render(<PlanRadio {...defaultProps} />);
    expect(Cost).toHaveBeenCalledWith({
      cost: defaultProps.plan.cost.monthly,
      period: defaultProps.paymentPeriod,
    });
  });

  it('calls register', () => {
    render(<PlanRadio {...defaultProps} />);
    expect(register).toHaveBeenCalledWith(defaultProps.name);
  });

  it('displays auto focused input', () => {
    render(<PlanRadio {...defaultProps} autoFocus />);
    expect(screen.getByRole('radio')).toHaveFocus();
  });

  it('displays checked input', () => {
    render(<PlanRadio {...defaultProps} isSelected />);
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
