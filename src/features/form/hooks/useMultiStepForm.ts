import { ReactElement } from "react";

export const useMultiStepForm = (
  steps: ReactElement[],
  currentStepIndex: number,
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  function next() {
    setCurrentStepIndex((i) => {
      if (i > steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};
