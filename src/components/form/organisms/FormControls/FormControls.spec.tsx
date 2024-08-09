import { FormControls } from './index';
import { screen, render } from '@testing-library/react';
import { useContextForm } from '@/context/form';
import { useContextFormMockedValues } from '@tests/constants';

describe('FormControls', () => {
  afterEach(() => {
    jest.clearAllMocks();
    (useContextForm as jest.Mock).mockReturnValue(useContextFormMockedValues);
  });

  it('displays go back button', () => {
    render(<FormControls />);
    expect(screen.getByText('Go Back')).toBeInTheDocument();
  });

  it('displays next step button', () => {
    render(<FormControls />);
    expect(screen.queryByText('Finish')).toBeNull();
    expect(screen.getByText('Next Step')).toBeInTheDocument();
  });

  it('displays finish button', () => {
    (useContextForm as jest.Mock).mockReturnValue({
      isLast: true,
    });
    render(<FormControls />);
    expect(screen.queryByText('Next Step')).toBeNull();
    expect(screen.getByText('Finish')).toBeInTheDocument();
  });

  it('calls moveToPrevious func on button click', () => {
    render(<FormControls />);
    screen.getByText('Go Back').click();
    expect(useContextFormMockedValues.moveToPrevious).toHaveBeenCalled();
  });

  it('next button is submit type', () => {
    render(<FormControls />);
    expect(screen.getByText('Next Step')).toHaveAttribute('type', 'submit');
  });
});
