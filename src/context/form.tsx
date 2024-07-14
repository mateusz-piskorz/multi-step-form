import React, { useContext, ReactNode, FC, useState, useMemo } from 'react';
import { formSchema } from '../zod/formSchema';
import { z } from 'zod';
import usePagination from '../hooks/usePagination';
import { FORM_STEPS } from '../constants/formSteps';
import { FormStep } from '../types/form';

type FormValues = z.infer<typeof formSchema>;

type FormContextType = {
  activeIndex: number;
  isLastIndex: boolean;
  isFirstIndex: boolean;
  formValues: FormValues;
  currentStep: FormStep;
  updateFormValues: (values: Partial<FormValues>) => void;
  moveToNext: () => void;
  moveToPrevious: () => void;
};

const Context = React.createContext<FormContextType | null>(null);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { activeIndex, isLastIndex, isFirstIndex, moveToNext, moveToPrevious } =
    usePagination(FORM_STEPS.length);
  const [formValues, setFormValues] = useState<FormValues>({
    addons: {
      onlineService: true,
      largerStorage: true,
      customizableProfile: false,
    },
    personalInfo: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    plan: {
      plan: 'arcade',
      yearly: false,
    },
  });

  const updateFormValues = (updatedValues: Partial<FormValues>) => {
    setFormValues((prev) => ({ ...prev, ...updatedValues }));

    if (!isLastIndex) {
      moveToNext();
    } else {
      //    show thankYou page
    }
  };

  return (
    <Context.Provider
      value={useMemo(
        () => ({
          formValues,
          activeIndex,
          isLastIndex,
          isFirstIndex,
          currentStep: FORM_STEPS[activeIndex],
          updateFormValues,
          moveToPrevious,
          moveToNext,
        }),
        [formValues, activeIndex],
      )}
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
