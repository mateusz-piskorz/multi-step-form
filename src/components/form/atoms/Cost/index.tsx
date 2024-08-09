import { styled, css } from 'styled-components';
import { PaymentPeriod } from '@/types/form';

type Props = {
  cost: number;
  period: PaymentPeriod;
  gray?: boolean;
  bold?: boolean;
  plusIcon?: boolean;
};

export const Cost = ({ cost, period, gray, bold, plusIcon }: Props) => {
  const periodText = period === 'monthly' ? 'mo' : 'yr';
  return (
    <StyledCost $gray={gray} $bold={bold}>
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
