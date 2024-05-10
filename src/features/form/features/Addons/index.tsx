import { FC } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { AddOnItem } from "./components/AddonItem";
import { styled } from "styled-components";
import { FormData } from "../../types";
import { PaymentPeriodType } from "../SelectPlan";
import { addons } from "./data";
import { UseFormRegister } from "react-hook-form";

type AddonsProps = {
  paymentPeriod: PaymentPeriodType;
  register: UseFormRegister<FormData>;
};

export const Addons: FC<AddonsProps> = ({ register, paymentPeriod }) => {
  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsWrapper>
        {addons.map((addOn) => {
          return (
            <AddOnItem
              key={addOn.name}
              addOn={addOn}
              register={register}
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
