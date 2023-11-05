import { FC } from "react";
import { firstLetterUpperCase } from "../../../../../utils";
import { plans } from "./data";
import { styled, css } from "styled-components";
import { CostWithPeriod } from "../../CostWithPeriod";
import { PaymentPeriod, SelectedPlan } from "../../../types";
import advanced from "../../../assets/icon-advanced.svg";
import arcade from "../../../assets/icon-arcade.svg";
import pro from "../../../assets/icon-pro.svg";

type PlanItemData = {
  selectedPlan: SelectedPlan;
  paymentPeriod: PaymentPeriod;
};

type PlanItemProps = PlanItemData & {
  displayedPlan: SelectedPlan;
  updateFields: (fields: Partial<PlanItemData>) => void;
};

export const PlanItem: FC<PlanItemProps> = ({
  displayedPlan,
  selectedPlan,
  updateFields,
  paymentPeriod,
}) => {
  const planIcon = { advanced, arcade, pro }[displayedPlan];
  const planCost =
    plans[displayedPlan].cost[
      paymentPeriod === "monthly" ? "monthly" : "yearly"
    ];
  return (
    <Button
      $selected={selectedPlan === displayedPlan}
      type="button"
      onClick={() => updateFields({ selectedPlan: displayedPlan })}
    >
      <img src={planIcon} alt={`${displayedPlan} plan icon`} />
      <div>
        <h2>{firstLetterUpperCase(displayedPlan)}</h2>
        <CostWithPeriod cost={planCost} period={paymentPeriod} />
      </div>
    </Button>
  );
};

const Button = styled.button<{ $selected?: boolean }>(
  ({ $selected, theme }) => {
    return css`
      border: 1px solid ${$selected ? theme.purplishBlue : theme.lightGray};
      background-color: ${$selected ? theme.magnolia : "white"};
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 15px;
      gap: 15px;

      > div {
        text-align: left;

        > h2 {
          margin-bottom: 5px;
          color: ${theme.marineBlue};
        }

        > p {
          color: ${theme.coolGray};
          font-size: 1rem;
        }
      }

      @media screen and (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        flex: 1 1 0px;
        width: 0;
      }
    `;
  }
);
