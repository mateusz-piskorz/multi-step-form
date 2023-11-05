import { FC, useId } from "react";
import { styled, css } from "styled-components";

const InfoItemStyled = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;

    input {
      padding: 15px 10px 15px 10px;
      border: 1px solid ${theme.lightGray};
      border-radius: 5px;
      &::placeholder {
        padding-left: 7px;
        font-weight: 700;
        font-size: 1rem;
        color: ${theme.coolGray};
        opacity: 1; /* Firefox */
      }
    }

    label {
      font-size: 1rem;
      color: ${theme.marineBlue};
      margin-bottom: 5px;
    }

    @media screen and (min-width: 1024px) {
      input {
        padding: 18px 12px 18px 12px;
        &::placeholder {
          font-size: 1.1rem;
        }
      }
      label {
        font-size: 1.1rem;
      }
    }
  `;
});

type InfoItemProps = {
  label: string;
  placeholder: string;
  inputValue: string;
  type: "text" | "email" | "tel";
  onChangeHandler: (value: string) => void;
};

export const InfoItem: FC<InfoItemProps> = ({
  label,
  placeholder,
  inputValue,
  type,
  onChangeHandler,
}) => {
  const id = useId();
  return (
    <InfoItemStyled>
      <label htmlFor={id}>{label}</label>
      <input
        required
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </InfoItemStyled>
  );
};
