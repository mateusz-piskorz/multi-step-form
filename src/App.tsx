import { useState, FC } from 'react';
import { useAnalytics } from '@owcaofficial/web-analytics';
import { MultiStepForm } from './components/organisms/MultiStepForm';

const App: FC = () => {
  useAnalytics();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return (
    <>
      {isFormSubmitted ? (
        // <ThankYouPage />
        <h1>Thank You</h1>
      ) : (
        <MultiStepForm />
      )}
    </>
  );
};

export default App;
