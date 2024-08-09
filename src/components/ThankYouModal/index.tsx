import thankYouIcon from '@/assets/icon-thank-you.svg';
import { styled, css } from 'styled-components';

export const ThankYouModal = () => {
  const { styledComponentId: ThankYouModal } = StyledThankYouModal;
  return (
    <StyledThankYouModal $className={ThankYouModal}>
      <img
        className={`${ThankYouModal}_icon`}
        src={thankYouIcon}
        alt="thank you icon"
      />
      <h2 className={`${ThankYouModal}_title`}>Thank you!</h2>
      <p className={`${ThankYouModal}_description`}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </StyledThankYouModal>
  );
};

const StyledThankYouModal = styled.div<{ $className: string }>(
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
