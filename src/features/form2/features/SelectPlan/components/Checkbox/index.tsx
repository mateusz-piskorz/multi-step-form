import { FC, useId } from "react";
import { styled, css } from "styled-components";

export const Checkbox: FC<{
  onCheck: (val: boolean) => void;
  isChecked: boolean;
}> = ({ isChecked, onCheck }) => {
  const id = useId();

  const { styledComponentId: Checkbox } = StyledCheckbox;
  return (
    <StyledCheckbox $className={Checkbox}>
      <input
        className={`${Checkbox}_input`}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <label className={`${Checkbox}_label`} htmlFor={id}></label>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      .${$className} {
        &_label {
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

        &_input:checked + label::before {
          transform: translateX(25px);
        }

        &_input {
          position: absolute;
          transform: translateX(-999px);
          width: 0;
          height: 0;
        }
      }
    `;
  }
);
