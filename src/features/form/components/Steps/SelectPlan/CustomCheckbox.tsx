import { FC, useId } from "react";
import { styled, css } from "styled-components";

export const CustomCheckbox: FC<{
  onCheck: (val: boolean) => void;
  isChecked: boolean;
}> = ({ isChecked, onCheck }) => {
  const id = useId();
  return (
    <CheckboxStyled>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <label htmlFor={id}></label>
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.div(({ theme }) => {
  return css`
    > label {
      background-color: ${theme.marineBlue};
      width: 50px;
      height: 25px;
      border-radius: 200px;
      cursor: pointer;
      display: block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        background-color: white;
        border-radius: 200px;
        width: 15px;
        height: 15px;
        margin: 5px;
        transition: transform 0.2s;
      }
    }

    > input:checked + label::before {
      transform: translateX(25px);
    }

    > input {
      display: none;
    }
  `;
});
