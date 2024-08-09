import { css, styled } from 'styled-components';
import { Cost } from '../../atoms/Cost';
import { PaymentPeriod } from '@/types/form';

type Props = {
  text: string;
  cost: number;
  boldText?: boolean;
  boldCost?: boolean;
  paymentPeriod: PaymentPeriod;
  backToPlanSelection?: () => void;
};

export const SummaryItem = ({
  boldCost,
  boldText,
  text,
  cost,
  paymentPeriod,
  backToPlanSelection,
}: Props) => {
  const { styledComponentId: SummaryItem } = StyledSummaryItem;

  const descriptionClassName = `${SummaryItem}_description${
    boldText ? ` ${SummaryItem}_description--bold` : ''
  }`;
  return (
    <StyledSummaryItem $className={SummaryItem}>
      <div>
        <p className={descriptionClassName}>{text}</p>

        {backToPlanSelection && (
          <button
            onClick={backToPlanSelection}
            type="button"
            className={`${SummaryItem}_button`}
          >
            Change
          </button>
        )}
      </div>

      <Cost
        gray={!boldCost}
        bold={boldCost}
        cost={cost}
        period={paymentPeriod}
      />
    </StyledSummaryItem>
  );
};

export const StyledSummaryItem = styled.div<{
  $className: string;
}>(({ theme, $className }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .${$className} {
      &_button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${theme.coolGray};
        color: ${theme.coolGray};
        font-size: 0.9rem;
        cursor: pointer;
        &:hover {
          border-color: ${theme.purplishBlue};
          color: ${theme.purplishBlue};
        }
      }

      &_description {
        font-size: 1rem;
        color: ${theme.coolGray};
        &::first-letter {
          text-transform: uppercase;
        }
      }

      &_description--bold {
        color: ${theme.marineBlue};
        font-weight: bold;
      }
    }

    @media screen and (min-width: 768px) {
      .${$className} {
        &_description {
          font-size: 1.1rem;
        }
      }
    }
  `;
});
