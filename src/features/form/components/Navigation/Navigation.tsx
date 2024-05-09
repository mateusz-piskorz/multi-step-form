import { FC } from "react";
import styled, { css } from "styled-components";

type NavigationProps = {
  next: () => void;
  back: () => void;
};

export const Navigation: FC<NavigationProps> = ({ back, next }) => {
  return (
    <ButtonsWrapper>
      {/* {isFirstStep ? (
        <div></div>
      ) : (
        <Button goBackCase onClick={back} type="button">
          Go Back
        </Button>
      )}
      <Button onClick={next} type={isLastStep ? "submit" : "button"}>
        {isLastStep ? "Finish" : "Next Step"}
      </Button> */}
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 20px;

    div {
      pointer-events: none;
      width: 0px;
    }

    @media screen and (min-width: 768px) {
      background-color: transparent;
    }
  `;
});
