import { useId, HTMLInputTypeAttribute } from 'react';
import { StyledInfoInput } from './input.styled';
import { FieldValues } from 'react-hook-form';
import { FieldProps } from '@/types/form';

type Props = {
  label: string;
  autoFocus?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

export const Input = <T extends FieldValues>({
  name,
  register,
  label,
  errorMessage,
  autoFocus,
  placeholder,
}: FieldProps<T> & Props) => {
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
