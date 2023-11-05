import { FC } from "react";
import { styled, css } from "styled-components";

type CostWithPeriodProps = {
  cost: number;
  period: "monthly" | "yearly";
  isHeading?: boolean;
  bold?: boolean;
  withoutPlus?: boolean;
};

export const CostWithPeriod: FC<CostWithPeriodProps> = ({
  cost,
  period,
  isHeading,
  bold,
  withoutPlus,
}) => {
  const periodText = period === "monthly" ? "mo" : "yr";
  return (
    <P $isHeading={isHeading} $bold={bold} className="cost">
      {!withoutPlus && "+"}${cost}/{periodText}
    </P>
  );
};

const P = styled.p<{ $isHeading?: boolean; $bold?: boolean }>(
  ({ theme, $isHeading, $bold }) => {
    return css`
      font-size: 0.8rem;
      color: ${$isHeading ? theme.marineBlue : theme.purplishBlue};
      ${$bold && "font-weight:bold"};

      @media screen and (min-width: 1024px) {
        font-size: 0.9rem;
      }
    `;
  }
);
