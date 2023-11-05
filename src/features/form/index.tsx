import { FC, useState, FormEvent } from "react";
import { AddOns } from "./components/Steps/AddOns";
import { SelectPlan } from "./components/Steps/SelectPlan";
import { YourInfo } from "./components/Steps/YourInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { styled, css } from "styled-components";
import { Button } from "./components/Button";
import { Summary } from "./components/Steps/Summary";
import { SelectedPlan, PaymentPeriod } from "./types";
import { ThankYouPage } from "./components/ThankYouPage";

export type FormData = {
  selectedPlan: SelectedPlan;
  paymentPeriod: PaymentPeriod;
  name: string;
  phoneNumber: string;
  email: string;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

const INITIAL_DATA: FormData = {
  selectedPlan: "arcade",
  paymentPeriod: "monthly",
  name: "",
  phoneNumber: "",
  email: "",
  onlineService: true,
  largerStorage: true,
  customizableProfile: false,
};

export const Form: FC<{
  currentStepIndex: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: (val: FormData) => void;
}> = ({ currentStepIndex, setCurrentStepIndex, onSubmit }) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isFinished, setFinished] = useState(false);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { step, isFirstStep, isLastStep, back, next, goTo } = useMultiStepForm(
    [
      <YourInfo {...data} updateFields={updateFields} />,
      <SelectPlan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary {...data} backToPlanSelection={() => goTo(1)} />,
    ],
    currentStepIndex,
    setCurrentStepIndex
  );

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      setFinished(true);
      onSubmit(data);
    }
  }

  return (
    <FormStyled onSubmit={submit}>
      {isFinished ? (
        <ThankYouPage />
      ) : (
        <>
          {step}
          <ButtonsWrapper>
            {isFirstStep ? (
              <div></div>
            ) : (
              <Button goBackCase={true} type="button" onClick={back}>
                Go Back
              </Button>
            )}
            <Button type="submit">{isLastStep ? "Finish" : "Next Step"}</Button>
          </ButtonsWrapper>
        </>
      )}
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

const ButtonsWrapper = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 20px;

    div {
      pointer-events: none;
      width: 0px;
    }

    @media screen and (min-width: 768px) {
      background-color: transparent;
    }
  `;
});
