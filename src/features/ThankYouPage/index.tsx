import { FC } from 'react';
import thankYouIcon from './assets/icon-thank-you.svg';
import { styled, css } from 'styled-components';

export const ThankYouPage: FC = () => {
  const { styledComponentId: ThankYouPage } = StyledThankYouPage;
  return (
    <StyledThankYouPage $className={ThankYouPage}>
      <img
        className={`${ThankYouPage}_icon`}
        src={thankYouIcon}
        alt="thank you icon"
      />
      <h2 className={`${ThankYouPage}_title`}>Thank you!</h2>
      <p className={`${ThankYouPage}_description`}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </StyledThankYouPage>
  );
};

const StyledThankYouPage = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      margin: auto;
      padding: 50px 0 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      text-align: center;

      .${$className} {
        &_icon {
          margin-bottom: 15px;
          max-width: 65px;
        }

        &_icon {
          color: ${theme.marineBlue};
        }

        &_description {
          color: ${theme.coolGray};
          max-width: 290px;
          line-height: 1.5rem;
        }
      }

      @media screen and (min-width: 768px) {
        .${$className} {
          &_icon {
            max-width: unset;
          }

          &_description {
            font-size: 1rem;
            max-width: 500px;
          }
        }
      }

      @media screen and (min-width: 1024px) {
        .${$className} {
          &_title {
            font-size: 2rem;
          }
        }
      }
    `;
  },
);
