import { FC, useEffect } from 'react';
import { FormWrapper } from '../../layouts/FormWrapper';
import { PlanItem } from './components/PlanItem';
import { PaymentPeriod } from './components/PaymentPeriod';
import { styled } from 'styled-components';
import { plans } from './data';
import { useForm } from '../../context';
import { useEvent } from '@owcaofficial/web-analytics';

export { plans };

export const SelectPlan: FC = () => {
  const event = useEvent();
  const { watch } = useForm();
  const paymentPeriod = watch('paymentPeriod');
  const selectedPlan = watch('selectedPlan');

  useEffect(() => {
    event('paymentPeriod', paymentPeriod);
  }, [paymentPeriod]);

  useEffect(() => {
    event('selectedPlan', selectedPlan);
  }, [selectedPlan]);

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanItemsWrapper>
        {plans.map((plan, index) => {
          return (
            <PlanItem autoFocus={index === 0} key={plan.name} plan={plan} />
          );
        })}
      </PlanItemsWrapper>
      <PaymentPeriod />
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
