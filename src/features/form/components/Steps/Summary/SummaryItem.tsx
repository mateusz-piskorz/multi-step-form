import { FC } from "react";
import { css, styled } from "styled-components";
import { CostWithPeriod } from "../../CostWithPeriod";
import { SelectedPlan, AddOnType, PaymentPeriod } from "../../../types";
import { firstLetterUpperCase } from "../../../../../utils/index";

type SummaryItemProps = {
  itemCase: "heading" | "service" | "total";
  selectedPlan?: SelectedPlan;
  displayedService?: AddOnType;
  cost: number;
  period: PaymentPeriod;
  backToPlanSelection?: () => void;
};

export const SummaryItem: FC<SummaryItemProps> = ({
  itemCase,
  cost,
  period,
  displayedService,
  selectedPlan,
  backToPlanSelection,
}) => {
  const periodText =
    period === "yearly"
      ? { plan: "(Yearly)", total: "(per year)" }
      : { plan: "(Monthly)", total: "(per month)" };
  const totalText = `Total ${periodText.total}`;

  const isHeading = itemCase === "heading" && !!selectedPlan;

  return (
    <Item $isTotal={itemCase === "total"}>
      {isHeading ? (
        <span>
          <h2>
            {firstLetterUpperCase(selectedPlan)} {periodText.plan}
          </h2>
          <button onClick={backToPlanSelection} type="button">
            Change
          </button>
        </span>
      ) : (
        <p className="description">
          {itemCase === "service" ? displayedService : totalText}
        </p>
      )}

      <CostWithPeriod
        withoutPlus={true}
        isHeading={isHeading || itemCase === "service"}
        bold={isHeading || itemCase === "total"}
        cost={cost}
        period={period}
      />
    </Item>
  );
};

const Item = styled.div<{ $isTotal: boolean }>(({ theme, $isTotal }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${$isTotal && "padding: 20px"};

    > span {
      > button {
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
      > h2 {
        font-size: 1rem;
        color: ${theme.marineBlue};
      }
    }
    > p {
      font-size: 1rem;
    }

    > p.description {
      color: ${theme.coolGray};
    }

    @media screen and (min-width: 768px) {
      > span {
        > h2 {
          font-size: 1.1rem;
        }
      }
      > p {
        font-size: 1.1rem;
      }
    }
  `;
});
