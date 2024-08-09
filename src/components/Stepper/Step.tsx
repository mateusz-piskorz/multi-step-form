import { styled, css } from 'styled-components';
import { modifiers } from '@/utils/modifiers';

type Props = {
  title: string;
  displayedStep: number;
  selectedStep: number;
};

export const Step = ({ displayedStep, selectedStep, title }: Props) => {
  const isSelected = displayedStep === selectedStep;

  const { styledComponentId: Step } = StepStyled;
  return (
    <StepStyled $className={Step}>
      <div
        className={modifiers({
          baseClass: `${Step}_index`,
          modifiers: isSelected && 'selected',
        })}
      >
        {displayedStep}
      </div>
      <div className={`${Step}_description`}>
        <p>STEP {displayedStep}</p>
        <h2>{title.toUpperCase()}</h2>
      </div>
    </StepStyled>
  );
};

const StepStyled = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      .${$className} {
        &_description {
          display: none;
        }

        &_index {
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

        &_index--selected {
          color: ${theme.purplishBlue};
          background-color: ${theme.lightGray};
        }
      }

      @media screen and (min-width: 768px) {
        display: flex;
        gap: 15px;
        padding-left: 25px;

        .${$className} {
          &_description {
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
      }
    `;
  },
);
