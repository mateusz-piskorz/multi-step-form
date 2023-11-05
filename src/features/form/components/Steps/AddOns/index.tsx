import { FC } from "react";
import { FormWrapper } from "../../../layouts/FormWrapper";
import { AddOnItem } from "./AddOnItem";
import { styled } from "styled-components";
import { PaymentPeriod } from "../../../types";
import { addonsArr } from "./data";

type AddOnsData = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  paymentPeriod: PaymentPeriod;
};

type AddOnsProps = AddOnsData & {
  updateFields: (fields: Partial<AddOnsData>) => void;
};

export const AddOns: FC<AddOnsProps> = ({
  customizableProfile,
  largerStorage,
  onlineService,
  updateFields,
  paymentPeriod,
}) => {
  const addonsArrWithChecked = addonsArr.map((e) => {
    return {
      name: e,
      isChecked: { customizableProfile, largerStorage, onlineService }[e],
    };
  });

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddOnsWrapper>
        {addonsArrWithChecked.map((addon) => {
          return (
            <AddOnItem
              key={addon.name}
              displayedAddOn={addon.name}
              isChecked={addon.isChecked}
              paymentPeriod={paymentPeriod}
              onCheck={(val) => updateFields({ [addon.name]: val })}
            />
          );
        })}
      </AddOnsWrapper>
    </FormWrapper>
  );
};

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
