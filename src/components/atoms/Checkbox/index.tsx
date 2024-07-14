import { useId } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { StyledCheckbox } from './Checkbox.styles';

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
  ariaLabel?: string;
}

export const Checkbox = <T extends FieldValues>({
  register,
  name,
  ariaLabel,
  errorMessage,
}: CheckboxProps<T>) => {
  const id = useId();

  const { styledComponentId: Checkbox } = StyledCheckbox;
  return (
    <StyledCheckbox $className={Checkbox}>
      <input
        {...register(name)}
        className={`${Checkbox}_input`}
        type="checkbox"
        id={id}
      />
      <label
        className={`${Checkbox}_label`}
        htmlFor={id}
        aria-label={ariaLabel}
      ></label>
      <p className="text-danger">{errorMessage}</p>
    </StyledCheckbox>
  );
};
