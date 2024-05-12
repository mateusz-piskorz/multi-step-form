import { FC, useState } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { AddonItem } from "./components/AddonItem";
import { styled } from "styled-components";
import { AddonType, PaymentPeriodType } from "../../types";
import { addons } from "./data";
export { addons };

type AddonsProps = {
  paymentPeriod: PaymentPeriodType;
  selectedAddons: AddonType[];
  setAddons: (props: AddonType[]) => void;
};

export const Addons: FC<AddonsProps> = ({
  selectedAddons,
  setAddons,
  paymentPeriod,
}) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setAddons([...selectedAddons, value as AddonType]);
    } else {
      setAddons(selectedAddons.filter((addon) => addon !== value));
    }
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsWrapper>
        {addons.map((addon) => {
          return (
            <AddonItem
              checked={selectedAddons.includes(addon.name)}
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
