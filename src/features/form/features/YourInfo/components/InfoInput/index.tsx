import { FC, useId } from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledInfoInput } from "./InfoInput.styled";
import { FormData } from "../../../../types";

type InfoInputProps = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  name: "name" | "email" | "phoneNumber";
  register: UseFormRegister<FormData>;
};

export const InfoInput: FC<InfoInputProps> = ({
  label,
  placeholder,
  register,
  type,
  name,
}) => {
  const id = useId();
  const { styledComponentId: InfoInput } = StyledInfoInput;
  return (
    <StyledInfoInput $className={InfoInput}>
      <label className={`${InfoInput}_label`} htmlFor={id}>
        {label}
      </label>
      <input
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
