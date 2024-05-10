import { styled, css } from "styled-components";

export const StyledPlanItem = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      .${$className} {
        &_input {
          position: absolute;
          transform: translateX(-999px);
          width: 0;
          height: 0;
        }

        &_input:checked ~ label {
          border: 1px solid ${theme.purplishBlue};
          background-color: ${theme.magnolia};
        }

        &_label {
          border: 1px solid ${theme.lightGray};
          background-color: white;
          border-radius: 5px;
          display: flex;
          align-items: center;
          padding: 15px;
          gap: 15px;

          > div {
            text-align: left;

            > h2 {
              margin-bottom: 5px;
              font-size: 1rem;
              color: ${theme.marineBlue};
            }

            > p {
              color: ${theme.coolGray};
              font-size: 1rem;
            }
          }
        }
      }

      @media screen and (min-width: 768px) {
        flex: 1 1 0px;
        .${$className} {
          &_label {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
        }
      }
    `;
  }
);
