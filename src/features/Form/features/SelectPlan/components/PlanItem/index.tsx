import { FC, useId } from "react";
import { firstLetterUpperCase } from "../../../../../../utils";
import { StyledPlanItem } from "./PlanItem.styled";
import { Cost } from "../../../Cost";
import { Plan } from "../../types";
import { useForm } from "../../../../context";

type PlanItemProps = {
  plan: Plan;
};

export const PlanItem: FC<PlanItemProps> = ({ plan: { cost, name } }) => {
  const { watch, register } = useForm();
  const paymentPeriod = watch("paymentPeriod");
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
        {...register("selectedPlan")}
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
