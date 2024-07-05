import { FC } from 'react';
import { styled, css } from 'styled-components';
import { Step } from './components/Step';
import bgDesktop from './assets/bg-sidebar-desktop.svg';
import bgMobile from './assets/bg-sidebar-mobile.svg';

type StepsProps = {
  activeStep: number;
  stepsArr: string[];
};

export const Steps: FC<StepsProps> = ({ activeStep, stepsArr }) => {
  return (
    <StepWrapper>
      <div className="steps-container">
        {stepsArr.map((stepTitle, index) => {
          return (
            <Step
              key={index}
              displayedStep={index + 1}
              title={stepTitle}
              selectedStep={activeStep + 1}
            />
          );
        })}
      </div>
    </StepWrapper>
  );
};

const StepWrapper = styled.div(({ theme }) => {
  return css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 200px;
    background-color: ${theme.coolGray};
    background-image: url(${bgMobile});
    background-position: center;
    background-size: cover;

    > .steps-container {
      justify-content: center;
      gap: 25px;
      margin-top: 35px;
      display: flex;
    }

    @media screen and (min-width: 768px) {
      background-image: url(${bgDesktop});
      position: relative;
      height: 100%;
      width: unset;
      min-width: 260px;
      flex-grow: 1;
      left: unset;
      transform: none;
      border-radius: 15px;

      > .steps-container {
        flex-direction: column;
        gap: 35px;
      }
    }

    @media screen and (min-width: 1024px) {
      min-width: 320px;
    }
  `;
});
