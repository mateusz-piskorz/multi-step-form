import { ReactNode, FC } from "react";
import { styled, css } from "styled-components";

type FormWrapperProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const FormWrapper: FC<FormWrapperProps> = ({
  title,
  description,
  children,
}) => {
  const { styledComponentId: FormWrapper } = StyledFormWrapper;

  return (
    <StyledFormWrapper $className={FormWrapper}>
      <h2 className={`${FormWrapper}_title`}>{title}</h2>
      <p className={`${FormWrapper}_description`}>{description}</p>
      {children}
    </StyledFormWrapper>
  );
};

const StyledFormWrapper = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
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
        position: relative;
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
  }
);
