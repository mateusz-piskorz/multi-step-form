import { ReactNode, FC } from "react";
import { styled, css } from "styled-components";

type FormWrapperProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const FormWrapper: FC<FormWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    width: 90%;
    max-width: 400px;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    padding: 30px 25px 30px 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);

    > h2 {
      color: ${theme.marineBlue};
    }

    > p {
      color: ${theme.coolGray};
      margin-bottom: 20px;
      max-width: 280px;
      line-height: 1.4rem;
    }

    @media screen and (min-width: 768px) {
      gap: 5px;
      max-width: unset;
      position: relative;
      top: unset;
      left: unset;
      transform: unset;
      box-shadow: none;
      width: auto;
      > p {
        max-width: unset;
      }
    }

    @media screen and (min-width: 1024px) {
      gap: 10px;
      > h2 {
        font-size: 2rem;
      }

      > p {
        font-size: 1.1rem;
      }
    }
  `;
});
