import { FC } from 'react';
import { styled, css } from 'styled-components';
import { PaymentPeriodType } from '../../../types/form';

type CostProps = {
  cost: number;
  period: PaymentPeriodType;
  gray?: boolean;
  bold?: boolean;
  plusIcon?: boolean;
};

export const Cost: FC<CostProps> = ({ cost, period, gray, bold, plusIcon }) => {
  const periodText = period === 'monthly' ? 'mo' : 'yr';
  return (
    <StyledCost $gray={gray} $bold={bold} className="cost">
      {plusIcon && '+'}${cost}/{periodText}
    </StyledCost>
  );
};

const StyledCost = styled.p<{ $gray?: boolean; $bold?: boolean }>(
  ({ theme: { coolGray, marineBlue }, $gray, $bold }) => {
    return css`
      color: ${$gray ? coolGray : marineBlue};
      ${$bold && 'font-weight:bold'};

      @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
      }
    `;
  },
);
