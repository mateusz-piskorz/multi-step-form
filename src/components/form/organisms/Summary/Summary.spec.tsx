import { PLANS } from '@/constants/plans';
import { Summary } from './index';
import { render } from '@testing-library/react';
import { useContextFormMockedValues } from '@tests/constants';
import { ADDONS } from '@/constants/addons';

const { formValues } = useContextFormMockedValues;

const paymentPeriod = formValues.plan.yearly ? 'yearly' : 'monthly';
const planCost = PLANS.find((p) => p.name === formValues.plan.plan)?.cost[
  paymentPeriod
];
const filteredAddons = ADDONS.filter(({ name }) =>
  Object.keys(formValues.addons).includes(name),
);
const addonsCost = filteredAddons.reduce((acc, currentVal) => {
  const cost = currentVal.cost[paymentPeriod];
  return acc + cost;
}, 0);

const SummaryItem = jest.fn();
jest.mock('../../molecules/SummaryItem', () => ({
  SummaryItem: jest.fn(({ ...props }) => SummaryItem(props)),
}));

describe('Summary', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays PlanItems', async () => {
    render(<Summary />);

    expect(SummaryItem).toHaveBeenNthCalledWith(1, {
      paymentPeriod,
      cost: planCost,
      text: `${formValues.plan.plan} (${paymentPeriod})`,
      backToPlanSelection: expect.any(Function),
      boldText: true,
    });

    for (const index in filteredAddons) {
      const addon = filteredAddons[index];
      expect(SummaryItem).toHaveBeenNthCalledWith(+index + 2, {
        paymentPeriod,
        cost: addon.cost[paymentPeriod],
        text: addon.title,
      });
    }

    expect(SummaryItem).toHaveBeenLastCalledWith({
      text: `Total (per ${paymentPeriod === 'monthly' ? 'month' : 'year'})`,
      paymentPeriod,
      boldCost: true,
      cost: addonsCost + planCost!,
    });
  });
});
