import { FC } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { AddonItem } from "./components/AddonItem";
import { styled } from "styled-components";
import { AddonType } from "../../types";
import { addons } from "./data";
import { useForm } from "../../context";
export { addons };

export const Addons: FC = () => {
  const { setValue, watch } = useForm();
  const paymentPeriod = watch("paymentPeriod");
  const selectedAddons = watch("selectedAddons");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setValue("selectedAddons", [...selectedAddons, value as AddonType]);
    } else {
      setValue(
        "selectedAddons",
        selectedAddons.filter((addon) => addon !== value)
      );
    }
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsWrapper>
        {addons.map((addon, index) => {
          return (
            <AddonItem
              autoFocus={index === 0}
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
