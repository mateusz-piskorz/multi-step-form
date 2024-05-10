import { FC } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { PlanItem } from "./components/PlanItem";
import { PaymentPeriod, PaymentPeriodProps } from "./components/PaymentPeriod";
import { styled } from "styled-components";
import { plans } from "./data";
import { FormData } from "../../types";
import { UseFormRegister } from "react-hook-form";
export type { PaymentPeriodType, PlanType } from "./types";

type SelectPLanProps = PaymentPeriodProps & {
  register: UseFormRegister<FormData>;
};

export const SelectPlan: FC<SelectPLanProps> = ({
  register,
  paymentPeriod,
  setPaymentPeriod,
}) => {
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanItemsWrapper>
        {plans.map((plan) => {
          return (
            <PlanItem
              key={plan.name}
              plan={plan}
              register={register}
              paymentPeriod={paymentPeriod}
            />
          );
        })}
      </PlanItemsWrapper>
      <PaymentPeriod
        paymentPeriod={paymentPeriod}
        setPaymentPeriod={setPaymentPeriod}
      />
    </FormWrapper>
  );
};

const PlanItemsWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
