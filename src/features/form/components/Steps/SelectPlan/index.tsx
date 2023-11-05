import { FC } from "react";
import { FormWrapper } from "../../../layouts/FormWrapper";
import { PlanItem } from "./PlanItem";
import { PaymentPeriodSelect } from "./PaymentPeriodSelect";
import { styled } from "styled-components";
import { plansArr } from "./data";
import { PaymentPeriod, SelectedPlan } from "../../../types";

type SelectPlanData = {
  selectedPlan: SelectedPlan;
  paymentPeriod: PaymentPeriod;
};

type SelectPLanProps = SelectPlanData & {
  updateFields: (fields: Partial<SelectPlanData>) => void;
};

export const SelectPlan: FC<SelectPLanProps> = ({
  selectedPlan,
  updateFields,
  paymentPeriod,
}) => {
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanItemsWrapper>
        {plansArr.map((plan) => {
          return (
            <PlanItem
              key={plan}
              selectedPlan={selectedPlan}
              displayedPlan={plan}
              updateFields={updateFields}
              paymentPeriod={paymentPeriod}
            />
          );
        })}
      </PlanItemsWrapper>
      <PaymentPeriodSelect
        paymentPeriod={paymentPeriod}
        updateFields={updateFields}
      />
    </FormWrapper>
  );
};

const PlanItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
