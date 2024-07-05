import { FC, useId } from 'react';
import { StyledInfoInput } from './InfoInput.styled';
import { useForm } from '../../../../context';

type InfoInputProps = {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel';
  name: 'name' | 'email' | 'phoneNumber';
  autoFocus?: boolean;
};

export const InfoInput: FC<InfoInputProps> = ({
  label,
  placeholder,
  autoFocus,
  type,
  name,
}) => {
  const id = useId();
  const { register } = useForm();
  const { styledComponentId: InfoInput } = StyledInfoInput;
  return (
    <StyledInfoInput $className={InfoInput}>
      <label className={`${InfoInput}_label`} htmlFor={id}>
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        className={`${InfoInput}_input`}
        required
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </StyledInfoInput>
  );
};
