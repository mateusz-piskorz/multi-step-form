import { FC } from 'react';
import { FormWrapper } from '../../layouts/FormWrapper';
import { styled, css } from 'styled-components';
import { SummaryItem } from './components/SummaryItem';
import { addons } from '../Addons';
import { plans } from '../SelectPlan';
import { useForm } from '../../context';

type SummaryData = {
  backToPlanSelection: () => void;
};

export const Summary: FC<SummaryData> = ({ backToPlanSelection }) => {
  const { watch } = useForm();
  const paymentPeriod = watch('paymentPeriod');
  const selectedPlan = watch('selectedPlan');
  const selectedAddons = watch('selectedAddons');

  const planCost = plans.find((p) => p.name === selectedPlan)?.cost[
    paymentPeriod
  ];

  const filteredAddons = addons.filter(({ name }) =>
    selectedAddons.includes(name),
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
          text={`${selectedPlan} (${paymentPeriod})`}
          backToPlanSelection={backToPlanSelection}
          boldText
        />
        <hr />
        {filteredAddons.map((addon) => {
          return (
            <SummaryItem
              key={addon.name}
              cost={addon.cost[paymentPeriod]}
              text={addon.title}
            />
          );
        })}
      </Wrapper>
      <SummaryItem
        extraPadding
        boldCost
        cost={addonsCost + planCost!}
        text={`Total (per ${paymentPeriod === 'monthly' ? 'month' : 'year'})`}
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
