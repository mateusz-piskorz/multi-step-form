import { FC } from 'react';
import styled, { css } from 'styled-components';

type NavigationProps = {
  back: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

export const Navigation: FC<NavigationProps> = ({
  back,
  isFirstStep,
  isLastStep,
}) => {
  const { styledComponentId: Navigation } = StyledNavigation;
  return (
    <StyledNavigation $className={Navigation}>
      {isFirstStep ? (
        <div className={`${Navigation}_dummyDiv`} />
      ) : (
        <button
          className={`${Navigation}_button ${Navigation}_button--gray`}
          onClick={back}
          type="button"
        >
          Go Back
        </button>
      )}
      <button className={`${Navigation}_button`} type={'submit'}>
        {isLastStep ? 'Finish' : 'Next Step'}
      </button>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div<{ $className: string }>(
  ({ $className, theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: white;
      padding: 20px;

      .${$className} {
        &_dummyDiv {
          pointer-events: none;
          width: 0px;
        }

        &_button {
          font-weight: bolder;
          color: white;
          background-color: ${theme.marineBlue};
          padding: 15px 20px 15px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          justify-self: flex-end;
        }

        &_button--gray {
          color: ${theme.coolGray};
          background-color: transparent;
        }
      }

      @media screen and (min-width: 768px) {
        background-color: transparent;
        position: absolute;
      }
    `;
  },
);
