import { AddonCheckbox } from '../../molecules/AddonCheckbox';
import { ADDONS } from '@/constants/addons';
import { useContextForm } from '@/context/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addonsSchema } from '@/zod/formSchema';
import { StyledForm } from '../../ui/Form.styled';
import { FormControls } from '../FormControls';

export const Addons = () => {
  const { formValues, updateFormValues } = useContextForm();
  const form = useForm<z.infer<typeof addonsSchema>>({
    resolver: zodResolver(addonsSchema),
    defaultValues: formValues.addons,
  });

  const onSubmit = (val: z.infer<typeof addonsSchema>) => {
    updateFormValues({ addons: val });
  };

  return (
    <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
      {ADDONS.map((addon, index) => {
        const { name } = addon;
        return (
          <AddonCheckbox
            key={name}
            register={form.register}
            autoFocus={index === 0}
            defaultChecked={formValues.addons[name]}
            name={name}
            paymentPeriod={formValues.plan.yearly ? 'yearly' : 'monthly'}
            addon={addon}
          />
        );
      })}
      <FormControls />
    </StyledForm>
  );
};
