import { styled, css } from 'styled-components';

export const StyledFormWrapper = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      flex-grow: 1;
      margin: 100px auto 140px auto;
      position: relative;
      width: 90%;
      max-width: 400px;
      background-color: white;
      border-radius: 15px;
      padding: 30px 25px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);

      .${$className} {
        &_title {
          color: ${theme.marineBlue};
        }

        &_description {
          color: ${theme.coolGray};
          margin-bottom: 20px;
          max-width: 280px;
          line-height: 1.4rem;
        }
      }

      @media screen and (min-width: 768px) {
        gap: 5px;
        max-width: unset;
        box-shadow: none;
        width: auto;
        margin: 0;

        .${$className} {
          &_description {
            max-width: unset;
          }
        }
      }

      @media screen and (min-width: 1024px) {
        gap: 10px;
        margin: 0 50px;
        flex-grow: 2;
        .${$className} {
          &_title {
            font-size: 2rem;
          }
          &_description {
            font-size: 1.1rem;
          }
        }
      }
    `;
  },
);

export const Dialog = styled.div(() => {
  return css`
    @media screen and (min-width: 768px) {
      display: flex;
      width: 750px;
      height: 550px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
      padding: 15px;
      border-radius: 15px;
    }

    @media screen and (min-width: 1024px) {
      width: 950px;
      height: 650px;
    }
  `;
});
