import { styled, css } from 'styled-components';

export const StyledAddonCheckbox = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      position: relative;
      .${$className} {
        &_input {
          top: 50%;
          transform: translateY(-50%);
          left: 15px;
          position: absolute;
          width: 20px;
          height: 20px;
        }

        &_input:checked ~ label {
          border: 1px solid ${theme.purplishBlue};
          background-color: ${theme.magnolia};
        }

        &_descriptionWrapper {
          flex-grow: 1;
          & > h2 {
            margin-bottom: 5px;
            font-size: 0.9rem;
            color: ${theme.marineBlue};
          }
          & > p {
            font-size: 0.8rem;
            color: ${theme.coolGray};
          }
        }

        &_label {
          cursor: pointer;
          display: flex;
          padding: 15px;
          padding-left: 50px;
          gap: 15px;
          border: 1px solid ${theme.coolGray};
          background-color: 'white';
          border-radius: 7px;
          align-items: center;
        }
      }

      @media screen and (min-width: 1024px) {
        &_descriptionWrapper {
          flex-grow: 1;
          & > h2 {
            font-size: 1rem;
          }
          & > p {
            font-size: 0.9rem;
          }
        }
      }
    `;
  },
);
