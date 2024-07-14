import { useId } from 'react';
import { StyledPlanItem } from './PlanItem.styled';
import { Cost } from '../Cost';
import { Plan } from '../../../types/form';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { PaymentPeriodType } from '../../../types';

interface PlanItemProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  plan: Plan;
  paymentPeriod: PaymentPeriodType;
  autoFocus?: boolean;
}

export const PlanItem = <T extends FieldValues>({
  name,
  register,
  plan,
  autoFocus,
  paymentPeriod,
}: PlanItemProps<T>) => {
  const id = useId();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const planIcon = require(`../../../assets/icon-${plan.name}.svg`);

  const { styledComponentId: PlanItem } = StyledPlanItem;
  return (
    <StyledPlanItem $className={PlanItem}>
      <input
        autoFocus={autoFocus}
        className={`${PlanItem}_input`}
        id={id}
        type="radio"
        {...register(name)}
      />
      <label htmlFor={id} className={`${PlanItem}_label`}>
        <img src={planIcon} alt={`${name} plan icon`} />
        <div>
          <h2>{plan.name}</h2>
          <Cost cost={plan.cost[paymentPeriod]} period={paymentPeriod} />
        </div>
      </label>
    </StyledPlanItem>
  );
};
