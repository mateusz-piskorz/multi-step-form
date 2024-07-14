import { useId, HTMLInputTypeAttribute } from 'react';
import { StyledInfoInput } from './input.styled';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  label: string;
  autoFocus?: boolean;
  errorMessage?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = <T extends FieldValues>({
  name,
  register,
  label,
  errorMessage,
  autoFocus,
  placeholder,
}: InputProps<T>) => {
  const id = useId();

  const { styledComponentId: InfoInput } = StyledInfoInput;
  return (
    <StyledInfoInput $className={InfoInput}>
      <label className={`${InfoInput}_label`} htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register(name)}
        className={`${InfoInput}_input`}
        id={id}
      />
      <p className="text-danger">{errorMessage}</p>
    </StyledInfoInput>
  );
};
