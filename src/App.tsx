import { css, styled } from 'styled-components';
import { Form } from './features/Form';
import { Steps } from './features/Steps';
import { useState, FC } from 'react';
import { ThankYouPage } from './features/ThankYouPage';
import { useAnalytics, useEvent } from '@owcaofficial/web-analytics';

const stepsArr = ['Your Info', 'Select Plan', 'add-ons', 'Summary'];

const App: FC = () => {
  const event = useEvent();
  useAnalytics();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return (
    <AppWrapper>
      {isFormSubmitted ? (
        <ThankYouPage />
      ) : (
        <>
          <Steps stepsArr={stepsArr} activeStep={currentStepIndex} />
          <Form
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            onSubmit={() => {
              event('submit-form', 'submit-form');
              setIsFormSubmitted(true);
            }}
          />
        </>
      )}
    </AppWrapper>
  );
};

const AppWrapper = styled.div(() => {
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

export default App;
