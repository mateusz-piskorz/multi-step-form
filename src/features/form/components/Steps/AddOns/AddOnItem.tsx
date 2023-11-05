import { FC, useRef } from "react";
import { styled, css } from "styled-components";
import { CostWithPeriod } from "../../CostWithPeriod";
import { PaymentPeriod } from "../../../types";
import { addons } from "./data";

type AddOnItemProps = {
  displayedAddOn: "onlineService" | "largerStorage" | "customizableProfile";
  paymentPeriod: PaymentPeriod;
  isChecked: boolean;
  onCheck: (val: boolean) => void;
};

export const AddOnItem: FC<AddOnItemProps> = ({
  displayedAddOn,
  isChecked,
  paymentPeriod,
  onCheck,
}) => {
  const addon = addons[displayedAddOn];
  const addonCost =
    addon.cost[paymentPeriod === "monthly" ? "monthly" : "yearly"];
  const { h2, p } = addon.description;

  const inputRef = useRef<HTMLInputElement>(null);
  const checkInput = (e: React.MouseEvent) => {
    if (inputRef.current && e.target !== inputRef.current) {
      onCheck(!isChecked);
    }
  };
  return (
    <Container onClick={checkInput} $selected={isChecked}>
      <input
        ref={inputRef}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <CostWithPeriod period={paymentPeriod} cost={addonCost} />
    </Container>
  );
};

const Container = styled.div<{ $selected?: boolean }>(
  ({ theme, $selected }) => {
    return css`
      cursor: pointer;
      display: flex;
      padding: 15px;
      gap: 15px;
      border: 1px solid ${$selected ? theme.purplishBlue : theme.coolGray};
      border-radius: 7px;
      background-color: ${$selected ? theme.magnolia : "white"};
      align-items: center;
      > input {
        width: 20px;
        height: 20px;
      }

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
