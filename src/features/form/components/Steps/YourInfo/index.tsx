import { FC } from "react";
import { FormWrapper } from "../../../layouts/FormWrapper";
import { InfoItem } from "./InfoItem";
import { styled, css } from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../../types";

const YourInfoWrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
});

type YourInfoProps = {
  register: UseFormRegister<FormData>;
};

export const YourInfo: FC<YourInfoProps> = ({ register }) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <YourInfoWrapper>
        <InfoItem
          register={register}
          name="name"
          type="text"
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <InfoItem
          register={register}
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InfoItem
          register={register}
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </YourInfoWrapper>
    </FormWrapper>
  );
};
