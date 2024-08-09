import { styled, css } from 'styled-components';
import { SummaryItem, StyledSummaryItem } from '../../molecules/SummaryItem';
import { ADDONS } from '../../../../constants/addons';
import { PLANS } from '../../../../constants/plans';
import { useContextForm } from '../../../../context/form';
import { FormControls } from '../FormControls';

export const Summary = () => {
  const { formValues, moveTo } = useContextForm();
  const paymentPeriod = formValues.plan.yearly ? 'yearly' : 'monthly';

  const planCost = PLANS.find((p) => p.name === formValues.plan.plan)?.cost[
    formValues.plan.yearly ? 'yearly' : 'monthly'
  ];

  const filteredAddons = ADDONS.filter(({ name }) =>
    Object.keys(formValues.addons).includes(name),
  );

  const addonsCost = filteredAddons.reduce((acc, currentVal) => {
    const cost = currentVal.cost[paymentPeriod];
    return acc + cost;
  }, 0);

  const { styledComponentId: Summary } = StyledSummary;
  return (
    <StyledSummary $className={Summary}>
      <div className={`${Summary}_wrapper`}>
        <SummaryItem
          paymentPeriod={paymentPeriod}
          cost={planCost!}
          text={`${formValues.plan.plan} (${paymentPeriod})`}
          backToPlanSelection={() => moveTo(1)}
          boldText
        />

        <hr className={`${Summary}_hr`} />

        {filteredAddons.map((addon) => {
          return (
            <SummaryItem
              paymentPeriod={paymentPeriod}
              key={addon.name}
              cost={addon.cost[paymentPeriod]}
              text={addon.title}
            />
          );
        })}
      </div>

      <SummaryItem
        paymentPeriod={paymentPeriod}
        boldCost
        cost={addonsCost + planCost!}
        text={`Total (per ${paymentPeriod === 'monthly' ? 'month' : 'year'})`}
      />

      <FormControls />
    </StyledSummary>
  );
};

const StyledSummary = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      .${$className} {
        &_wrapper {
          background-color: ${theme.magnolia};
          border-radius: 7px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        &_hr {
          height: 1px;
          background-color: ${theme.lightGray};
          border: none;
        }
      }

      & > ${StyledSummaryItem} {
        padding: 20px;
      }

      @media screen and (min-width: 768px) {
        .${$className} {
          &_wrapper {
            gap: 25px;
          }
        }
      }
    `;
  },
);
