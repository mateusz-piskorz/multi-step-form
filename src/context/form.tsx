import React, { useContext, ReactNode, FC, useState } from 'react';
import { formSchema } from '../zod/formSchema';
import { z } from 'zod';
import usePagination from '../hooks/usePagination';
import { FORM_STEPS } from '../constants/formSteps';
import { FormStep } from '../types/form';
import { DEFAULT_FORM_VALUES } from '../constants/defaultFormValues';

type FormValues = z.infer<typeof formSchema>;

type FormContextType = {
  activeIndex: number;
  isLast: boolean;
  isFirst: boolean;
  formValues: FormValues;
  currentStep: FormStep;
  isSubmitted: boolean;
  updateFormValues: (values: Partial<FormValues>) => void;
  moveToPrevious: () => void;
  submit: () => void;
  moveTo: (index: number) => void;
};

const Context = React.createContext<FormContextType | null>(null);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { activeIndex, moveToNext, ...rest } = usePagination(FORM_STEPS.length);
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);

  const updateFormValues = (updatedValues: Partial<FormValues>) => {
    setFormValues((prev) => ({ ...prev, ...updatedValues }));
    moveToNext();
  };

  const submit = () => {
    console.log('api called with values:', formValues);
    setIsSubmitted(true);
  };

  return (
    <Context.Provider
      value={{
        formValues,
        activeIndex,
        currentStep: FORM_STEPS[activeIndex],
        isSubmitted,
        updateFormValues,
        submit,
        ...rest,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextForm = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error('useForm must be used within FormProvider');
  } else {
    return context;
  }
};
