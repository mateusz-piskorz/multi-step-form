import { FC } from "react";
import { css, styled } from "styled-components";
import { Cost } from "../../../Cost";
import { PlanType, AddonType, PaymentPeriodType } from "../../../../types";
import { firstLetterUpperCase } from "../../../../../../utils";

type SummaryItemProps = {
  itemCase: "heading" | "service" | "total";
  selectedPlan?: PlanType;
  displayedService?: AddonType;
  cost: number;
  period: PaymentPeriodType;
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

  const { styledComponentId: SummaryItem } = StyledSummaryItem;
  return (
    <StyledSummaryItem $className={SummaryItem} $isTotal={itemCase === "total"}>
      {isHeading ? (
        <div>
          <h2 className={`${SummaryItem}_title`}>
            {firstLetterUpperCase(selectedPlan)} {periodText.plan}
          </h2>
          <button
            onClick={backToPlanSelection}
            type="button"
            className={`${SummaryItem}_button`}
          >
            Change
          </button>
        </div>
      ) : (
        <p className={`${SummaryItem}_description`}>
          {itemCase === "service" ? displayedService : totalText}
        </p>
      )}

      <Cost
        gray={isHeading || itemCase === "service"}
        bold={isHeading || itemCase === "total"}
        cost={cost}
        period={period}
      />
    </StyledSummaryItem>
  );
};

const StyledSummaryItem = styled.div<{ $isTotal: boolean; $className: string }>(
  ({ theme, $isTotal, $className }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${$isTotal && "padding: 20px"};

      .${$className} {
        &_title {
          font-size: 1rem;
          color: ${theme.marineBlue};
        }

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
        }
      }

      @media screen and (min-width: 768px) {
        .${$className} {
          &_title {
            font-size: 1.1rem;
          }
          &_description {
            font-size: 1.1rem;
          }
        }
      }
    `;
  }
);
