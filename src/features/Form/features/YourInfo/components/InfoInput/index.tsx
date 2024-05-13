import { FC, useId } from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledInfoInput } from "./InfoInput.styled";
import { FormData } from "../../../../types";
import { useForm } from "../../../../context";

type InfoInputProps = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  name: "name" | "email" | "phoneNumber";
};

export const InfoInput: FC<InfoInputProps> = ({
  label,
  placeholder,

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
