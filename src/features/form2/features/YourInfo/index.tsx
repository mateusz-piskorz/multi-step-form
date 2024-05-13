import { FC } from "react";
import { FormWrapper } from "../../layouts/FormWrapper";
import { InfoInput } from "./components/InfoInput";
import { styled, css } from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../../types";

type YourInfoProps = {
  register: UseFormRegister<FormData>;
};

export const YourInfo: FC<YourInfoProps> = ({ register }) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <StyledYourInfo>
        <InfoInput
          register={register}
          name="name"
          type="text"
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <InfoInput
          register={register}
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InfoInput
          register={register}
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </StyledYourInfo>
    </FormWrapper>
  );
};

const StyledYourInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
