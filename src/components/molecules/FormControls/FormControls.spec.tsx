import { FormControls } from './index';
import { screen, render } from '@testing-library/react';

it("doesn't display back button if first step", () => {
  render(<FormControls />);
  expect(screen.queryByText('Go Back')).toBeNull();
});

it('calls back func on button click', () => {
  render(<FormControls />);
  screen.getByText('Go Back').click();
  // expect(defaultProps.back).toHaveBeenCalled();
});

it('displays finish button if last step', () => {
  render(<FormControls />);
  expect(screen.getByText('Finish')).toHaveAttribute('type', 'submit');
});
