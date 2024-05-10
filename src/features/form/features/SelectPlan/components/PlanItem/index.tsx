import { FC, useId } from "react";
import { firstLetterUpperCase } from "../../../../../../utils";
import { StyledPlanItem } from "./PlanItem.styled";
import { Cost } from "../../../Cost";
import { FormData } from "../../../../types";
import { Plan, PaymentPeriodType } from "../../types";
import { UseFormRegister } from "react-hook-form";

type PlanItemProps = {
  paymentPeriod: PaymentPeriodType;
  plan: Plan;
  register: UseFormRegister<FormData>;
};

export const PlanItem: FC<PlanItemProps> = ({
  plan: { cost, name },
  paymentPeriod,
  register,
}) => {
  const id = useId();
  const planIcon = require(`../../assets/icon-${name}.svg`);
  const planCost = cost[paymentPeriod === "monthly" ? "monthly" : "yearly"];

  const { styledComponentId: PlanItem } = StyledPlanItem;
  return (
    <StyledPlanItem $className={PlanItem}>
      <input
        className={`${PlanItem}_input`}
        id={id}
        type="radio"
        {...register("plan")}
        value={name}
      />
      <label htmlFor={id} className={`${PlanItem}_label`}>
        <img src={planIcon} alt={`${name} plan icon`} />
        <div>
          <h2>{firstLetterUpperCase(name)}</h2>
          <Cost cost={planCost} period={paymentPeriod} />
        </div>
      </label>
    </StyledPlanItem>
  );
};
