import { FC } from "react";
import { Addons } from "./features/Addons";
import { SelectPlan } from "./features/SelectPlan";
import { YourInfo } from "./features/YourInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { styled, css } from "styled-components";
import { Summary } from "./features/Summary";
import { FormData } from "./types";
import { Navigation } from "./components/Navigation";
import { FormProvider, useForm } from "./context";

type FormProps = {
  currentStepIndex: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: (val: FormData) => void;
};

export const Form: FC<FormProps> = (props) => {
  return (
    <FormProvider>
      <App {...props} />
    </FormProvider>
  );
};

export const App: FC<FormProps> = ({
  currentStepIndex,
  setCurrentStepIndex,
  onSubmit,
}) => {
  const { handleSubmit } = useForm();

  const { step, goTo, next, isLastStep, ...navigationProps } = useMultiStepForm(
    [
      <YourInfo />,
      <SelectPlan />,
      <Addons />,
      <Summary backToPlanSelection={() => goTo(1)} />,
    ],
    currentStepIndex,
    setCurrentStepIndex
  );

  return (
    <FormStyled
      onSubmit={handleSubmit((data) => (isLastStep ? onSubmit(data) : next()))}
    >
      {step}
      <Navigation {...navigationProps} isLastStep={isLastStep} />
    </FormStyled>
  );
};

const FormStyled = styled.form(() => {
  return css`
    @media screen and (min-width: 768px) {
      flex-grow: 1;
      position: relative;
      height: 100%;
    }

    @media screen and (min-width: 1024px) {
      flex-grow: 2;
      margin: 0px 50px 0px 50px;
    }
  `;
});
