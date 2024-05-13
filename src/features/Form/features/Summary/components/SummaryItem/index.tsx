import { FC } from "react";
import { css, styled } from "styled-components";
import { Cost } from "../../../Cost";
import { useForm } from "../../../../context";

type SummaryItemProps = {
  text: string;
  cost: number;
  extraPadding?: boolean;
  boldText?: boolean;
  boldCost?: boolean;
  backToPlanSelection?: () => void;
};

export const SummaryItem: FC<SummaryItemProps> = ({
  extraPadding,
  boldCost,
  boldText,
  text,
  cost,
  backToPlanSelection,
}) => {
  const { watch } = useForm();
  const paymentPeriod = watch("paymentPeriod");

  const { styledComponentId: SummaryItem } = StyledSummaryItem;
  const descriptionClassName = `${SummaryItem}_description${
    boldText ? ` ${SummaryItem}_description--bold` : ""
  }`;
  return (
    <StyledSummaryItem $extraPadding={!!extraPadding} $className={SummaryItem}>
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

const StyledSummaryItem = styled.div<{
  $className: string;
  $extraPadding: boolean;
}>(({ theme, $className, $extraPadding }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${$extraPadding ? "20px" : "0"};

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
