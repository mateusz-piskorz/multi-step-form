/*eslint-disable @typescript-eslint/no-unused-vars */

import { DEFAULT_FORM_VALUES } from '../src/constants/defaultFormValues';
import { formSchema } from '../src/zod/formSchema';
import { z } from 'zod';

type FormValues = z.infer<typeof formSchema>;

export const useContextFormMockedValues = {
  activeIndex: 1,
  isLastIndex: false,
  isFirstIndex: false,
  formValues: DEFAULT_FORM_VALUES,
  currentStep: {
    title: 'mockedTitle',
    description: 'mockedDescription',
    FormComponent: () => jest.fn(),
  },
  isSubmitted: false,
  updateFormValues: jest.fn((values: Partial<FormValues>) => {}),
  moveToNext: jest.fn(),
  moveToPrevious: jest.fn(),
  moveTo: jest.fn((index: number) => {}),
};
