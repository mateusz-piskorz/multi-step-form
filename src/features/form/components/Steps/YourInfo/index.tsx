import { FC } from "react";
import { FormWrapper } from "../../../layouts/FormWrapper";
import { InfoItem } from "./InfoItem";
import { styled, css } from "styled-components";

const YourInfoWrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
});

type YourInfoData = {
  name: string;
  email: string;
  phoneNumber: string;
};

type YourInfoProps = YourInfoData & {
  updateFields: (fields: Partial<YourInfoData>) => void;
};

export const YourInfo: FC<YourInfoProps> = ({
  name,
  email,
  phoneNumber,
  updateFields,
}) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <YourInfoWrapper>
        <InfoItem
          type="text"
          inputValue={name}
          label="Name"
          placeholder="e.g. Stephen King"
          onChangeHandler={(val) => updateFields({ name: val })}
        />
        <InfoItem
          type="email"
          inputValue={email}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          onChangeHandler={(val) => updateFields({ email: val })}
        />
        <InfoItem
          type="tel"
          inputValue={phoneNumber}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          onChangeHandler={(val) => updateFields({ phoneNumber: val })}
        />
      </YourInfoWrapper>
    </FormWrapper>
  );
};
