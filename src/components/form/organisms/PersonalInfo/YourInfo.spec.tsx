import { PersonalInfo } from './index';
import { render, screen, waitFor } from '@testing-library/react';
import { useContextFormMockedValues } from '@tests/constants';
import { useContextForm } from '@/context/form';

const Input = jest.fn();
jest.mock('../../atoms/Input', () => ({
  Input: jest.fn((props) => Input(props)),
}));

describe('PersonalInfo', () => {
  afterEach(() => {
    jest.clearAllMocks();
    (useContextForm as jest.Mock).mockReturnValue(useContextFormMockedValues);
  });

  it('displays InfoInput', async () => {
    render(<PersonalInfo />);
    expect(Input).toHaveBeenNthCalledWith(1, {
      autoFocus: true,
      label: 'Name',
      name: 'name',
      placeholder: 'e.g. Stephen King',
      errorMessage: undefined,
      register: expect.any(Function),
    });
    expect(Input).toHaveBeenNthCalledWith(2, {
      label: 'Email Address',
      name: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      errorMessage: undefined,
      type: 'email',
      register: expect.any(Function),
    });
    expect(Input).toHaveBeenNthCalledWith(3, {
      label: 'Phone Number',
      name: 'phoneNumber',
      placeholder: 'e.g. +1 234 567 890',
      errorMessage: undefined,
      type: 'tel',
      register: expect.any(Function),
    });
  });

  it('passes errorMessages on submit', async () => {
    render(<PersonalInfo />);
    jest.clearAllMocks();
    screen.getByText('Next Step').click();

    await waitFor(async () => {
      expect(Input).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          errorMessage: 'String must contain at least 3 character(s)',
        }),
      );
      expect(Input).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          errorMessage: 'Invalid email',
        }),
      );
      expect(Input).toHaveBeenNthCalledWith(
        3,
        expect.objectContaining({
          errorMessage: 'String must contain at least 9 character(s)',
        }),
      );
      expect(
        useContextFormMockedValues.updateFormValues,
      ).not.toHaveBeenCalled();
    });
  });

  it('calls updateFormValues on submit', async () => {
    const personalInfo = {
      email: 'mockedEmail@onet.pl',
      name: 'mockedName',
      phoneNumber: '1234544234',
    };
    (useContextForm as jest.Mock).mockReturnValue({
      ...useContextFormMockedValues,
      formValues: {
        personalInfo,
      },
    });
    render(<PersonalInfo />);
    screen.getByText('Next Step').click();

    await waitFor(async () => {
      expect(useContextFormMockedValues.updateFormValues).toHaveBeenCalledWith({
        personalInfo,
      });
    });
  });
});
