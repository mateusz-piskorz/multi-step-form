import { FC } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { styled, css } from "styled-components";
import { SummaryItem } from "./components/SummaryItem";
import { AddonType, PaymentPeriodType, PlanType } from "../../types";
import { addons } from "../Addons";
import { plans } from "../SelectPlan";

type SummaryData = {
  selectedPlan: PlanType;
  paymentPeriod: PaymentPeriodType;
  selectedAddons: AddonType[];
  backToPlanSelection: () => void;
};

export const Summary: FC<SummaryData> = ({
  paymentPeriod,
  selectedPlan,
  selectedAddons,
  backToPlanSelection,
}) => {
  const planCost = plans.find((p) => p.name === selectedPlan)?.cost[
    paymentPeriod
  ];
  const filteredAddons = addons.filter(({ name }) =>
    selectedAddons.includes(name)
  );
  const addonsCost = filteredAddons.reduce((acc, currentVal) => {
    const cost = currentVal.cost[paymentPeriod];
    return acc + cost;
  }, 0);

  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <Wrapper>
        <SummaryItem
          cost={planCost!}
          itemCase="heading"
          period={paymentPeriod}
          selectedPlan={selectedPlan}
          backToPlanSelection={backToPlanSelection}
        />
        <hr />
        {filteredAddons.map((addon) => {
          return (
            <SummaryItem
              key={addon.name}
              cost={addon.cost[paymentPeriod]}
              period={paymentPeriod}
              itemCase="service"
              displayedService={addon.name}
            />
          );
        })}
      </Wrapper>
      <SummaryItem
        cost={addonsCost + planCost!}
        itemCase="total"
        period={paymentPeriod}
      />
    </FormWrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.magnolia};
    border-radius: 7px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    > hr {
      height: 1px;
      background-color: ${theme.lightGray};
      border: none;
    }

    @media screen and (min-width: 768px) {
      gap: 25px;
    }
  `;
});
