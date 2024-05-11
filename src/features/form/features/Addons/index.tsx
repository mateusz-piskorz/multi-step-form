import { FC, useState } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { AddonItem } from "./components/AddonItem";
import { styled } from "styled-components";
import { FormData } from "../../types";
import { PaymentPeriodType } from "../SelectPlan";
import { addonsArr } from "./data";
import { UseFormRegister } from "react-hook-form";
import { AddonType } from "./types";

export type { AddonType } from "./types";

type AddonsProps = {
  paymentPeriod: PaymentPeriodType;
  addons: AddonType[];
  setAddons: (props: AddonType[]) => void;
};

export const Addons: FC<AddonsProps> = ({
  addons,
  setAddons,
  paymentPeriod,
}) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setAddons([...addons, value as AddonType]);
    } else {
      setAddons(addons.filter((addon) => addon !== value));
    }
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsWrapper>
        {addonsArr.map((addon) => {
          return (
            <AddonItem
              checked={!!addons.find((e) => e === addon.name)}
              key={addon.name}
              addon={addon}
              changeHandler={changeHandler}
              paymentPeriod={paymentPeriod}
            />
          );
        })}
      </AddonsWrapper>
    </FormWrapper>
  );
};

const AddonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
