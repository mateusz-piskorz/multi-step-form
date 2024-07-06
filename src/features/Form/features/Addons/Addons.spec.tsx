import { Addons } from './index';
import { render } from '@testing-library/react';
import { addons } from './data';

const FormWrapperProps = jest.fn();
jest.mock('../../layouts/FormWrapper', () => ({
  FormWrapper: jest.fn(({ children, ...props }) => {
    FormWrapperProps(props);
    return <>{children}</>;
  }),
}));

const AddonItemProps = jest.fn();
jest.mock('./components/AddonItem', () => ({
  AddonItem: jest.fn((props) => {
    AddonItemProps(props);
  }),
}));

it('displays FormWrapper', async () => {
  render(<Addons />);
  expect(FormWrapperProps).toHaveBeenCalledWith({
    description: 'Add-ons help enhance your gaming experience.',
    title: 'Pick add-ons',
  });
});

it('displays AddonItem', async () => {
  render(<Addons />);
  for (const addon of addons) {
    expect(AddonItemProps).toHaveBeenCalledWith(
      expect.objectContaining({
        addon,
        checked: addon.name === 'onlineService',
        paymentPeriod: 'monthly',
      }),
    );
  }
});
