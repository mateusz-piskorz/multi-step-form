import { useAnalytics } from '@owcaofficial/web-analytics';
import { useContextForm } from './context/form';
import { Dialog, StyledFormWrapper } from './App.styled';
import { Stepper } from './components/Stepper';
import { ThankYouModal } from './components/ThankYouModal';
import { FORM_STEPER_STEPS } from './constants/formSteps';

const App = () => {
  useAnalytics();
  const {
    isSubmitted,
    currentStep: { FormComponent, description, title },
    activeIndex,
  } = useContextForm();

  const { styledComponentId: FormWrapper } = StyledFormWrapper;
  return (
    <>
      {isSubmitted ? (
        <ThankYouModal />
      ) : (
        <Dialog>
          <Stepper activeStep={activeIndex} stepsArr={FORM_STEPER_STEPS} />
          <StyledFormWrapper $className={FormWrapper}>
            <h2 className={`${FormWrapper}_title`}>{title}</h2>
            <p className={`${FormWrapper}_description`}>{description}</p>
            <FormComponent />
          </StyledFormWrapper>
        </Dialog>
      )}
    </>
  );
};

export default App;
