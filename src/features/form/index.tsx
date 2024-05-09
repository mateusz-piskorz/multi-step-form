import { FC, useState, FormEvent } from "react";
import { AddOns } from "./components/Steps/AddOns";
import { SelectPlan } from "./components/Steps/SelectPlan";
import { YourInfo } from "./components/Steps/YourInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { styled, css } from "styled-components";
import { Summary } from "./components/Steps/Summary";
import { SelectedPlan, PaymentPeriod, FormData } from "./types";
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
  const setPaymentPeriod = (val: PaymentPeriod) => {
    setValue("paymentPeriod", val);
  };

  const [isFinished, setFinished] = useState(false);

  const { step, goTo, ...navigationProps } = useMultiStepForm(
    [
      <YourInfo register={register} />,
      <SelectPlan
        paymentPeriod={paymentPeriod}
        setPaymentPeriod={setPaymentPeriod}
        register={register}
      />,
      <AddOns paymentPeriod={paymentPeriod} register={register} />,
      // <Summary {...data} backToPlanSelection={() => goTo(1)} />,
    ],
    currentStepIndex,
    setCurrentStepIndex
  );

  return (
    <FormStyled onSubmit={handleSubmit((data) => onSubmit(data))}>
      {isFinished ? (
        <ThankYouPage />
      ) : (
        <>
          {step}
          <Navigation {...navigationProps} />
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
