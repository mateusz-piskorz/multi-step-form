import { PlanRadio } from '../../molecules/PlanRadio';
import { styled } from 'styled-components';
import { PLANS } from '@/constants/plans';
import { useContextForm } from '@/context/form';
// import { useEvent } from '@owcaofficial/web-analytics';
import { useForm } from 'react-hook-form';
import { planSchema } from '@/zod/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SelectPeriod } from '../../molecules/SelectPeriod';
import { StyledForm } from '../../ui/Form.styled';
import { FormControls } from '../FormControls';

export const SelectPlan = () => {
  const { formValues, updateFormValues } = useContextForm();
  const form = useForm<z.infer<typeof planSchema>>({
    resolver: zodResolver(planSchema),
    defaultValues: formValues.plan,
  });

  const onSubmit = (val: z.infer<typeof planSchema>) => {
    updateFormValues({ plan: val });
  };

  //   const event = useEvent();
  //   const { watch } = useForm();
  const yearly = form.watch('yearly');
  const paymentPeriod = yearly ? 'yearly' : 'monthly';
  const selectedPlan = form.watch('plan');

  //   useEffect(() => {
  //     event('paymentPeriod', paymentPeriod);
  //   }, [paymentPeriod]);

  //   useEffect(() => {
  //     event('selectedPlan', selectedPlan);
  //   }, [selectedPlan]);

  return (
    <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
      <StyledFieldset>
        {PLANS.map((plan, index) => {
          return (
            <PlanRadio
              isSelected={selectedPlan === plan.name}
              autoFocus={index === 0}
              key={plan.name}
              plan={plan}
              name="plan"
              paymentPeriod={paymentPeriod}
              register={form.register}
            />
          );
        })}
      </StyledFieldset>

      <SelectPeriod name="yearly" register={form.register} checked={yearly} />

      <FormControls />
    </StyledForm>
  );
};

const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
