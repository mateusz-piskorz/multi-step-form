import React, { useContext, ReactNode, useState } from 'react';
import { formSchema } from '../zod/formSchema';
import { z } from 'zod';
import usePagination from '../hooks/usePagination';
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

type Props = { children: ReactNode; formSteps: FormStep[] };

const Context = React.createContext<FormContextType | null>(null);

export const FormProvider = ({ children, formSteps }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { activeIndex, moveToNext, ...rest } = usePagination(formSteps.length);
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
        currentStep: formSteps[activeIndex],
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
