import { styled, css } from 'styled-components';

export const StyledInfoInput = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      display: flex;
      flex-direction: column;

      .${$className} {
        &_input {
          padding: 15px 10px 15px 10px;
          border: 1px solid ${theme.lightGray};
          border-radius: 5px;
          font-size: 1rem;
          &::placeholder {
            padding-left: 7px;
            font-weight: 700;
            font-size: 1rem;
            color: ${theme.coolGray};
            opacity: 1;
          }
        }

        &_label {
          font-size: 1rem;
          color: ${theme.marineBlue};
          margin-bottom: 5px;
        }
      }

      @media screen and (min-width: 1024px) {
        .${$className} {
          &_input {
            padding: 18px 12px 18px 12px;
            font-size: 1.1rem;
            &::placeholder {
              font-size: 1.1rem;
            }
          }

          &_label {
            font-size: 1.1rem;
          }
        }
      }
    `;
  },
);
