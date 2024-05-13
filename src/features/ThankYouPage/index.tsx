import { FC } from "react";
import thankYouIcon from "./assets/icon-thank-you.svg";
import { styled, css } from "styled-components";

export const ThankYouPage: FC = () => {
  return (
    <StyledThankYouPage>
      <img src={thankYouIcon} alt="thank you icon" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </StyledThankYouPage>
  );
};

const StyledThankYouPage = styled.div(({ theme }) => {
  return css`
    margin: auto;
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;

    > img {
      margin-bottom: 15px;
      max-width: 65px;
    }

    > h2 {
      color: ${theme.marineBlue};
    }

    > p {
      color: ${theme.coolGray};
      max-width: 290px;
      line-height: 1.5rem;
    }

    @media screen and (min-width: 768px) {
      > img {
        max-width: unset;
      }
      > p {
        font-size: 1rem;
        max-width: 500px;
      }
    }

    @media screen and (min-width: 1024px) {
      > h2 {
        font-size: 2rem;
      }
      > p {
        font-size: 1rem;
      }
    }
  `;
});
