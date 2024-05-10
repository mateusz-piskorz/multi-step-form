import { FC, useState, FormEvent } from "react";
import { Addons } from "./features/Addons";
import { SelectPlan, PaymentPeriodType } from "./features/SelectPlan";
import { YourInfo } from "./features/YourInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { styled, css } from "styled-components";
// import { Summary } from "./components/Steps/Summary";
import { FormData } from "./types";

import { ThankYouPage } from "./components/ThankYouPage";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigation } from "./components/Navigation";

export const Form: FC<{
  currentStepIndex: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: (val: FormData) => void;
}> = ({ currentStepIndex, setCurrentStepIndex, onSubmit }) => {
  const { register, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      paymentPeriod: "monthly",
      plan: "arcade",
      onlineService: true,
      largerStorage: true,
    },
  });
  const paymentPeriod = watch("paymentPeriod");
  const setPaymentPeriod = (val: PaymentPeriodType) => {
    setValue("paymentPeriod", val);
  };

  const [isFinished, setFinished] = useState(false);

  const { step, goTo, next, isLastStep, ...navigationProps } = useMultiStepForm(
    [
      <YourInfo register={register} />,
      <SelectPlan
        paymentPeriod={paymentPeriod}
        setPaymentPeriod={setPaymentPeriod}
        register={register}
      />,
      <Addons paymentPeriod={paymentPeriod} register={register} />,
      // <Summary {...data} backToPlanSelection={() => goTo(1)} />,
    ],
    currentStepIndex,
    setCurrentStepIndex
  );

  return (
    <FormStyled
      onSubmit={handleSubmit((data) => (isLastStep ? onSubmit(data) : next()))}
    >
      {isFinished ? (
        <ThankYouPage />
      ) : (
        <>
          {step}
          <Navigation {...navigationProps} isLastStep={isLastStep} />
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
