import { useId } from 'react';
import { StyledAddonCheckbox } from './AddonCheckbox.styled';
import { Cost } from '../../atoms/Cost';
import { FieldValues } from 'react-hook-form';
import { PaymentPeriod, Addon, FieldProps } from '@/types/form';

type Props = {
  ariaLabel?: string;
  defaultChecked?: boolean;
  autoFocus?: boolean;
  paymentPeriod: PaymentPeriod;
  addon: Addon;
};

export const AddonCheckbox = <T extends FieldValues>({
  name,
  register,
  addon: { cost, description, title },
  ariaLabel,
  defaultChecked,
  paymentPeriod,
  autoFocus,
}: FieldProps<T> & Props) => {
  const addonCost = cost[paymentPeriod === 'monthly' ? 'monthly' : 'yearly'];
  const id = useId();
  const { styledComponentId: AddonCheckbox } = StyledAddonCheckbox;

  return (
    <StyledAddonCheckbox $className={AddonCheckbox}>
      <input
        {...register(name)}
        className={`${AddonCheckbox}_input`}
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        autoFocus={autoFocus}
      />

      <label
        className={`${AddonCheckbox}_label`}
        htmlFor={id}
        aria-label={ariaLabel}
      >
        <div className={`${AddonCheckbox}_descriptionWrapper`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Cost plusIcon period={paymentPeriod} cost={addonCost} />
      </label>
    </StyledAddonCheckbox>
  );
};
