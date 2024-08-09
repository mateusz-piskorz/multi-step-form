/* eslint-disable @typescript-eslint/no-var-requires */

import { useId } from 'react';
import { StyledPlanRadio } from './PlanRadio.styled';
import { Cost } from '../../atoms/Cost';
import { FieldValues } from 'react-hook-form';
import { Plan, FieldProps, PaymentPeriod } from '@/types/form';

type Props = {
  plan: Plan;
  paymentPeriod: PaymentPeriod;
  autoFocus?: boolean;
  isSelected?: boolean;
};

export const PlanRadio = <T extends FieldValues>({
  name,
  register,
  plan,
  autoFocus,
  paymentPeriod,
  isSelected,
}: FieldProps<T> & Props) => {
  const id = useId();
  const planIcon = require(`@/assets/icon-${plan.name}.svg`);
  const { styledComponentId: PlanRadio } = StyledPlanRadio;

  return (
    <StyledPlanRadio $className={PlanRadio}>
      <input
        autoFocus={autoFocus}
        className={`${PlanRadio}_input`}
        id={id}
        type="radio"
        value={plan.name}
        checked={isSelected}
        {...register(name)}
      />

      <label htmlFor={id} className={`${PlanRadio}_label`}>
        <img src={planIcon} alt={`${plan.name} plan icon`} />
        <div>
          <h2>{plan.name}</h2>
          <Cost cost={plan.cost[paymentPeriod]} period={paymentPeriod} />
        </div>
      </label>
    </StyledPlanRadio>
  );
};
