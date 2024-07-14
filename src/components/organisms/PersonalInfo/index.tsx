import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../atoms/Input';
import { styled } from 'styled-components';
import { useContextForm } from '../../../context/form';
import { useForm } from 'react-hook-form';
import { personalInfoSchema } from '../../../zod/formSchema';
import { z } from 'zod';
import { FormControls } from '../../molecules/FormControls';

export const PersonalInfo: FC = () => {
  const { formValues, updateFormValues } = useContextForm();
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: formValues.personalInfo,
  });

  const onSubmit = (val: z.infer<typeof personalInfoSchema>) => {
    updateFormValues({ personalInfo: val });
  };

  return (
    <StyledYourInfo onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        name="name"
        register={form.register}
        errorMessage={form.formState.errors.name?.message}
        label="Name"
        placeholder="e.g. Stephen King"
        autoFocus
      />
      <Input
        name="email"
        register={form.register}
        errorMessage={form.formState.errors.email?.message}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
      />
      <Input
        name="phoneNumber"
        register={form.register}
        errorMessage={form.formState.errors.phoneNumber?.message}
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="tel"
      />
      <FormControls />
    </StyledYourInfo>
  );
};

const StyledYourInfo = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
