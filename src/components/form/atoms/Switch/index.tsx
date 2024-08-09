import { useId } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyledSwitch } from './Switch.styled';
import { FieldProps } from '@/types/form';

type Props = { ariaLabel?: string; defaultChecked?: boolean };

export const Switch = <T extends FieldValues>({
  defaultChecked,
  register,
  name,
  ariaLabel,
}: FieldProps<T> & Props) => {
  const id = useId();

  const { styledComponentId: Checkbox } = StyledSwitch;
  return (
    <StyledSwitch $className={Checkbox}>
      <input
        {...register(name)}
        className={`${Checkbox}_input`}
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
      />

      <label
        className={`${Checkbox}_label`}
        htmlFor={id}
        aria-label={ariaLabel}
      ></label>
    </StyledSwitch>
  );
};
