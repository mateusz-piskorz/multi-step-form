import { Addons } from './index';
import { render, screen, waitFor } from '@testing-library/react';
import { useContextFormMockedValues } from '@tests/constants';
import { ADDONS } from '@/constants/addons';

const { formValues, updateFormValues } = useContextFormMockedValues;

const AddonCheckbox = jest.fn();
jest.mock('../../molecules/AddonCheckbox', () => ({
  AddonCheckbox: jest.fn((props) => AddonCheckbox(props)),
}));

describe('Addons', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders AddonCheckboxes', async () => {
    render(<Addons />);
    for (const addonIndex in ADDONS) {
      const addon = ADDONS[addonIndex];
      expect(AddonCheckbox).toHaveBeenNthCalledWith(+addonIndex + 1, {
        autoFocus: +addonIndex === 0,
        defaultChecked: formValues.addons[addon.name],
        paymentPeriod: formValues.plan.yearly ? 'yearly' : 'monthly',
        name: addon.name,
        register: expect.any(Function),
        addon: addon,
      });
    }
  });

  it('calls submit handler on submit', async () => {
    render(<Addons />);
    screen.getByText('Next Step').click();
    await waitFor(async () => {
      expect(updateFormValues).toHaveBeenCalledWith({
        addons: {
          ...formValues.addons,
        },
      });
    });
  });
});
