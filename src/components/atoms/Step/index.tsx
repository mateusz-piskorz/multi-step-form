import { FC } from 'react';
import { styled, css } from 'styled-components';

type StepProps = {
  title: string;
  displayedStep: number;
  selectedStep: number;
};

export const Step: FC<StepProps> = ({ displayedStep, selectedStep, title }) => {
  const isSelected = displayedStep === selectedStep;

  return (
    <StepStyled>
      <div className={`index ${isSelected ? 'selected' : ''}`}>
        {displayedStep}
      </div>
      <div className="description">
        <p>STEP {displayedStep}</p>
        <h2>{title.toUpperCase()}</h2>
      </div>
    </StepStyled>
  );
};

const StepStyled = styled.div(({ theme }) => {
  return css`
    > .description {
      display: none;
    }

    > .index {
      color: white;
      border: 1px solid white;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: bolder;
    }

    > .index.selected {
      color: ${theme.purplishBlue};
      background-color: ${theme.lightGray};
    }

    @media screen and (min-width: 768px) {
      display: flex;
      gap: 15px;
      padding-left: 25px;
      > .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1px 0 1px 0;
        > h2 {
          font-size: 0.9rem;
          color: white;
        }
        > p {
          font-size: 0.8rem;
          color: ${theme.lightGray};
        }
      }
    }
  `;
});
