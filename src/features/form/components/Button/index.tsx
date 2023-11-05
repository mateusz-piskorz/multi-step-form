import { FC, ReactNode } from "react";
import { styled, css } from "styled-components";

export const Button: FC<{
  type: "submit" | "button";
  goBackCase?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}> = ({ children, onClick, type, goBackCase }) => {
  return (
    <ButtonStyled $goBackCase={goBackCase} onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ $goBackCase?: boolean }>(
  ({ theme, $goBackCase }) => {
    return css`
      font-weight: bolder;
      color: ${$goBackCase ? theme.coolGray : "white"};
      background-color: ${$goBackCase ? "transparent" : theme.marineBlue};
      padding: 15px 20px 15px 20px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      justify-self: flex-end;
    `;
  }
);
