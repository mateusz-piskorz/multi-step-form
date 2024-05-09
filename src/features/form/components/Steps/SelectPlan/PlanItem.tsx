import { FC, useId } from "react";
import { firstLetterUpperCase } from "../../../../../utils";
import { plans } from "./data";
import { styled, css } from "styled-components";
import { CostWithPeriod } from "../../CostWithPeriod";
import { PaymentPeriod, SelectedPlan, FormData } from "../../../types";
import advanced from "../../../assets/icon-advanced.svg";
import arcade from "../../../assets/icon-arcade.svg";
import pro from "../../../assets/icon-pro.svg";
import { UseFormRegister } from "react-hook-form";

type PlanItemProps = {
  paymentPeriod: PaymentPeriod;
  displayedPlan: SelectedPlan;
  register: UseFormRegister<FormData>;
};

export const PlanItem: FC<PlanItemProps> = ({
  displayedPlan,
  paymentPeriod,
  register,
}) => {
  const id = useId();
  const planIcon = { advanced, arcade, pro }[displayedPlan];
  const planCost =
    plans[displayedPlan].cost[
      paymentPeriod === "monthly" ? "monthly" : "yearly"
    ];

  const { styledComponentId: PlanItem } = StyledPlanItem;
  return (
    <StyledPlanItem $className={PlanItem}>
      <input
        className={`${PlanItem}_input`}
        id={id}
        type="radio"
        {...register("plan")}
        value={displayedPlan}
      />
      <label id="dwa" htmlFor={id} className={`${PlanItem}_label`}>
        <img src={planIcon} alt={`${displayedPlan} plan icon`} />
        <div>
          <h2>{firstLetterUpperCase(displayedPlan)}</h2>
          <CostWithPeriod cost={planCost} period={paymentPeriod} />
        </div>
      </label>
    </StyledPlanItem>
  );
};

const StyledPlanItem = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      .${$className} {
        &_input {
          position: absolute;
          transform: translateX(-999px);
          width: 0;
          height: 0;
        }

        &_input:checked ~ label {
          border: 1px solid ${theme.purplishBlue};
          background-color: ${theme.magnolia};
        }

        &_label {
          border: 1px solid ${theme.lightGray};
          background-color: white;
          border-radius: 5px;
          display: flex;
          align-items: center;
          padding: 15px;
          gap: 15px;

          > div {
            text-align: left;

            > h2 {
              margin-bottom: 5px;
              font-size: 1rem;
              color: ${theme.marineBlue};
            }

            > p {
              color: ${theme.coolGray};
              font-size: 1rem;
            }
          }
        }
      }

      @media screen and (min-width: 768px) {
        flex: 1 1 0px;
        .${$className} {
          &_label {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
        }
      }
    `;
  }
);
