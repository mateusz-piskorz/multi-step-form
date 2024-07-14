import { FC } from 'react';
// import { FormWrapper } from '../../layouts/FormWrapper';
import { PlanItem } from '../../atoms/PlanItem';
// import { PaymentPeriod } from './components/PaymentPeriod';
import { styled } from 'styled-components';
import { plans } from '../../../constants/plans';
import { useContextForm } from '../../../context/form';
// import { useEvent } from '@owcaofficial/web-analytics';
import { useForm } from 'react-hook-form';
import { planSchema } from '../../../zod/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const SelectPlan: FC = () => {
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
  //   const selectedPlan = watch('selectedPlan');

  //   useEffect(() => {
  //     event('paymentPeriod', paymentPeriod);
  //   }, [paymentPeriod]);

  //   useEffect(() => {
  //     event('selectedPlan', selectedPlan);
  //   }, [selectedPlan]);

  console.log(form.formState.errors);
  return (
    <>
      <StyledFieldset>
        {plans.map((plan, index) => {
          return (
            <PlanItem
              autoFocus={index === 0}
              key={plan.name}
              plan={plan}
              name="plan"
              paymentPeriod={paymentPeriod}
              register={form.register}
            />
          );
        })}
        <p className="danger">{form.formState.errors.plan?.message}</p>
      </StyledFieldset>
      {/* <PaymentPeriod /> */}
    </>
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
