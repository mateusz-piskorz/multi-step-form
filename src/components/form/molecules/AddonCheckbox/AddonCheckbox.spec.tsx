import { screen, render } from '@testing-library/react';
import { AddonCheckbox } from './index';

const MockedCost = jest.fn();
jest.mock('../../atoms/Cost', () => ({
  Cost: jest.fn((props) => MockedCost(props)),
}));

const register = jest.fn();

const defaultProps = {
  addon: {
    cost: { monthly: 12, yearly: 120 },
    description: 'description',
    title: 'title',
    name: 'largerStorage',
  },
  name: 'name',
  register,
  paymentPeriod: 'monthly',
  ariaLabel: 'aria Label',
  autoFocus: false,
  defaultChecked: false,
} as const;

describe('AddonCheckbox', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays title', () => {
    render(<AddonCheckbox {...defaultProps} />);
    expect(screen.getByText(defaultProps.addon.title)).toBeInTheDocument();
  });

  it('displays description', () => {
    render(<AddonCheckbox {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.addon.description),
    ).toBeInTheDocument();
  });

  it('displays Cost component', () => {
    render(<AddonCheckbox {...defaultProps} />);
    expect(MockedCost).toHaveBeenCalledWith({
      cost: defaultProps.addon.cost.monthly,
      period: defaultProps.paymentPeriod,
      plusIcon: true,
    });
  });

  it('displays unchecked input by default', () => {
    render(<AddonCheckbox {...defaultProps} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('displays checked input', () => {
    render(<AddonCheckbox {...defaultProps} defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('displays ariaLabel on label tag', () => {
    render(<AddonCheckbox {...defaultProps} defaultChecked />);
    expect(screen.getByLabelText(defaultProps.ariaLabel).tagName).toBe('LABEL');
  });

  it('input is focused by default', () => {
    render(<AddonCheckbox {...defaultProps} autoFocus />);
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });

  it('input uses register', () => {
    render(<AddonCheckbox {...defaultProps} autoFocus />);
    expect(register).toHaveBeenCalledWith(defaultProps.name);
  });
});
