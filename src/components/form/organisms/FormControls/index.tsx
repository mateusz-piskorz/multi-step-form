import { StyledFormControls } from './FormControls.styled';
import { useContextForm } from '@/context/form';

export const FormControls = () => {
  const { moveToPrevious, isFirst, isLast, submit } = useContextForm();
  const { styledComponentId: FormControls } = StyledFormControls;

  return (
    <StyledFormControls $className={FormControls}>
      {isFirst ? (
        <div className={`${FormControls}_dummyDiv`} />
      ) : (
        <button
          className={`${FormControls}_button ${FormControls}_button--gray`}
          onClick={moveToPrevious}
          type="button"
        >
          Go Back
        </button>
      )}

      <button
        className={`${FormControls}_button`}
        type={isLast ? 'button' : 'submit'}
        {...(isLast && { onClick: submit })}
      >
        {isLast ? 'Finish' : 'Next Step'}
      </button>
    </StyledFormControls>
  );
};
