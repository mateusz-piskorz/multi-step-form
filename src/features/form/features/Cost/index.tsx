import { FC } from "react";
import { styled, css } from "styled-components";

type CostProps = {
  cost: number;
  period: "monthly" | "yearly";
  gray?: boolean;
  bold?: boolean;
  plusIcon?: boolean;
};

export const Cost: FC<CostProps> = ({ cost, period, gray, bold, plusIcon }) => {
  const periodText = period === "monthly" ? "mo" : "yr";
  return (
    <StyledCost $gray={gray} $bold={bold} className="cost">
      {plusIcon && "+"}${cost}/{periodText}
    </StyledCost>
  );
};

const StyledCost = styled.p<{ $gray?: boolean; $bold?: boolean }>(
  ({ theme, $gray, $bold }) => {
    return css`
      font-size: 0.8rem;
      color: ${$gray ? theme.purplishBlue : theme.marineBlue};
      ${$bold && "font-weight:bold"};

      @media screen and (min-width: 1024px) {
        font-size: 0.9rem;
      }
    `;
  }
);
