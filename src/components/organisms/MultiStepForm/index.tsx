import { FC } from 'react';
import { StyledFormWrapper, Dialog } from './MultiStepForm.syled';
import { useContextForm } from '../../../context/form';
import { Stepper } from '../Stepper';
import { FORM_STEPER_STEPS } from '../../../constants/formSteps';
export const MultiStepForm: FC = () => {
  const {
    currentStep: { FormComponent, description, title },
    activeIndex,
  } = useContextForm();

  const { styledComponentId: FormWrapper } = StyledFormWrapper;
  return (
    <Dialog>
      <Stepper activeStep={activeIndex} stepsArr={FORM_STEPER_STEPS} />
      <StyledFormWrapper $className={FormWrapper}>
        <h2 className={`${FormWrapper}_title`}>{title}</h2>
        <p className={`${FormWrapper}_description`}>{description}</p>
        <FormComponent />
      </StyledFormWrapper>
    </Dialog>
  );
};
