import { FC, useId, useRef } from "react";
import { styled, css } from "styled-components";
import { CostWithPeriod } from "../../CostWithPeriod";
import { PaymentPeriod, FormData } from "../../../types";
import { addons } from "./data";
import { AddOn } from "./types";
import { UseFormRegister } from "react-hook-form";

type AddOnItemProps = {
  addOn: AddOn;
  paymentPeriod: PaymentPeriod;
  register: UseFormRegister<FormData>;
};

export const AddOnItem: FC<AddOnItemProps> = ({
  addOn: { cost, description, name, title },
  register,
  paymentPeriod,
}) => {
  const addonCost = cost[paymentPeriod === "monthly" ? "monthly" : "yearly"];
  const id = useId();
  const { styledComponentId: AddOnItem } = StyledAddOnItem;
  return (
    <StyledAddOnItem $className={AddOnItem}>
      <input
        id={id}
        className={`${AddOnItem}_input`}
        type="checkbox"
        {...register(name)}
      />
      <label className={`${AddOnItem}_label`} htmlFor={id}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <CostWithPeriod period={paymentPeriod} cost={addonCost} />
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

          > div {
            flex-grow: 1;
            > h2 {
              margin-bottom: 5px;
              font-size: 0.9rem;
              color: ${theme.marineBlue};
            }
            > p {
              font-size: 0.8rem;
              color: ${theme.coolGray};
            }
          }
        }
      }

      @media screen and (min-width: 1024px) {
        > div {
          > h2 {
            font-size: 1rem;
          }
          > p {
            font-size: 0.9rem;
          }
        }
      }
    `;
  }
);
