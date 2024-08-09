import { styled, css } from 'styled-components';
import { Step } from './Step';
import bgDesktop from '@/assets/bg-sidebar-desktop.svg';
import bgMobile from '@/assets/bg-sidebar-mobile.svg';

type Props = {
  activeStep: number;
  stepsArr: string[];
};

export const Stepper = ({ activeStep, stepsArr }: Props) => {
  const { styledComponentId: Stepper } = StyledStepper;
  return (
    <StyledStepper $className={Stepper}>
      <div className={`${Stepper}_container`}>
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
    </StyledStepper>
  );
};

const StyledStepper = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
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

      .${$className} {
        &_container {
          justify-content: center;
          gap: 25px;
          margin-top: 35px;
          display: flex;
        }
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

        .${$className} {
          &_container {
            flex-direction: column;
            gap: 35px;
          }
        }
      }

      @media screen and (min-width: 1024px) {
        min-width: 320px;
      }
    `;
  },
);
