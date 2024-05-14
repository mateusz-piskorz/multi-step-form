import { FC, useId } from "react";
import { styled, css } from "styled-components";
import { Cost } from "../../../Cost";
import { PaymentPeriodType } from "../../../../types";
import { Addon } from "../../types";

type AddOnItemProps = {
  addon: Addon;
  paymentPeriod: PaymentPeriodType;
  changeHandler: (props: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  autoFocus?: boolean;
};

export const AddonItem: FC<AddOnItemProps> = ({
  addon: { cost, description, name, title },
  changeHandler,
  paymentPeriod,
  checked,
  autoFocus,
}) => {
  const addonCost = cost[paymentPeriod === "monthly" ? "monthly" : "yearly"];
  const id = useId();
  const { styledComponentId: AddOnItem } = StyledAddOnItem;

  return (
    <StyledAddOnItem $className={AddOnItem}>
      <input
        autoFocus={autoFocus}
        id={id}
        value={name}
        className={`${AddOnItem}_input`}
        type="checkbox"
        onChange={changeHandler}
        checked={checked}
      />
      <label className={`${AddOnItem}_label`} htmlFor={id}>
        <div className={`${AddOnItem}_descriptionWrapper`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Cost plusIcon period={paymentPeriod} cost={addonCost} />
      </label>
    </StyledAddOnItem>
  );
};

const StyledAddOnItem = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      position: relative;
      .${$className} {
        &_input {
          top: 50%;
          transform: translateY(-50%);
          left: 15px;
          position: absolute;
          width: 20px;
          height: 20px;
        }

        &_input:checked ~ label {
          border: 1px solid ${theme.purplishBlue};
          background-color: ${theme.magnolia};
        }

        &_descriptionWrapper {
          flex-grow: 1;
          & > h2 {
            margin-bottom: 5px;
            font-size: 0.9rem;
            color: ${theme.marineBlue};
          }
          & > p {
            font-size: 0.8rem;
            color: ${theme.coolGray};
          }
        }

        &_label {
          cursor: pointer;
          display: flex;
          padding: 15px;
          padding-left: 50px;
          gap: 15px;
          border: 1px solid ${theme.coolGray};
          background-color: "white";
          border-radius: 7px;
          align-items: center;
        }
      }

      @media screen and (min-width: 1024px) {
        &_descriptionWrapper {
          flex-grow: 1;
          & > h2 {
            font-size: 1rem;
          }
          & > p {
            font-size: 0.9rem;
          }
        }
      }
    `;
  }
);
