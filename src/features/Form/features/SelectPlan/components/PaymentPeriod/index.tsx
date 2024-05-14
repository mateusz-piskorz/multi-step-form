import { FC } from "react";
import { styled, css } from "styled-components";
import { Checkbox } from "../Checkbox";
import { useForm } from "../../../../context";

export const PaymentPeriod: FC = () => {
  const { watch, setValue } = useForm();
  const paymentPeriod = watch("paymentPeriod");

  const isYearly = paymentPeriod === "yearly";
  const { styledComponentId: PaymentPeriod } = StyledPaymentPeriod;

  return (
    <StyledPaymentPeriod $className={PaymentPeriod}>
      <p
        className={`${PaymentPeriod}_period${
          isYearly ? "" : ` ${PaymentPeriod}_period-selected`
        }`}
      >
        Monthly
      </p>
      <Checkbox
        ariaLabel="yearly payment period"
        isChecked={isYearly}
        onCheck={(val: boolean) =>
          setValue("paymentPeriod", val ? "yearly" : "monthly")
        }
      />
      <p
        className={`${PaymentPeriod}_period${
          isYearly ? ` ${PaymentPeriod}_period-selected` : ""
        }`}
      >
        Yearly
      </p>
    </StyledPaymentPeriod>
  );
};

const StyledPaymentPeriod = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      display: flex;
      justify-content: center;
      margin-top: 15px;
      gap: 25px;
      padding: 20px 15px 20px 15px;
      background-color: ${theme.magnolia};
      border-radius: 5px;

      .${$className} {
        &_period {
          font-weight: bolder;
          color: ${theme.coolGray};
        }

        &_period--selected {
          font-weight: bolder;
          color: ${theme.coolGray};
        }
      }

      > p.selected {
        color: ${theme.marineBlue};
      }
    `;
  }
);
