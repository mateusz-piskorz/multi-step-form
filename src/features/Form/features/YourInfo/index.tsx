import { FC } from 'react';
import { FormWrapper } from '../../layouts/FormWrapper';
import { InfoInput } from './components/InfoInput';
import { styled } from 'styled-components';

export const YourInfo: FC = () => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <StyledYourInfo>
        <InfoInput
          autoFocus
          name="name"
          type="text"
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <InfoInput
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InfoInput
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
