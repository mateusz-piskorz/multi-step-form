import { SelectPlan } from './index';
import { render, screen, waitFor } from '@testing-library/react';
import { useContextFormMockedValues } from '@tests/constants';
import { PLANS } from '@/constants/plans';

const { formValues } = useContextFormMockedValues;

const SelectPeriod = jest.fn();
jest.mock('../../molecules/SelectPeriod', () => ({
  SelectPeriod: jest.fn((props) => SelectPeriod(props)),
}));

const PlanRadio = jest.fn();
jest.mock('../../molecules/PlanRadio', () => ({
  PlanRadio: jest.fn((props) => PlanRadio(props)),
}));

describe('PersonalInfo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders SelectPeriod', async () => {
    render(<SelectPlan />);
    expect(SelectPeriod).toHaveBeenCalledWith({
      checked: formValues.plan.yearly,
      name: 'yearly',
      register: expect.any(Function),
    });
  });

  it('renders PlanRadio', async () => {
    render(<SelectPlan />);

    for (const index in PLANS) {
      const plan = PLANS[index];
      expect(PlanRadio).toHaveBeenNthCalledWith(+index + 1, {
        name: 'plan',
        register: expect.any(Function),
        isSelected: formValues.plan.plan === plan.name,
        autoFocus: +index === 0,
        plan,
        paymentPeriod: formValues.plan.yearly ? 'yearly' : 'monthly',
      });
    }
  });

  it('calls updateFormValues on submit', async () => {
    render(<SelectPlan />);
    screen.getByText('Next Step').click();

    await waitFor(async () => {
      expect(useContextFormMockedValues.updateFormValues).toHaveBeenCalledWith({
        plan: {
          plan: formValues.plan.plan,
          yearly: formValues.plan.yearly,
        },
      });
    });
  });
});
