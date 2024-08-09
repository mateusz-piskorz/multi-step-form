import { render } from '@testing-library/react';
import { Stepper } from '../index';

const defaultProps = {
  activeStep: 0,
  stepsArr: ['step1', 'step2', 'step3'],
};

const Step = jest.fn();
jest.mock('../Step', () => ({ Step: jest.fn((props) => Step(props)) }));

describe('Step', () => {
  test('renders steps', () => {
    render(<Stepper {...defaultProps} />);

    for (const index in defaultProps.stepsArr) {
      const step = defaultProps.stepsArr[+index];
      expect(Step).toHaveBeenNthCalledWith(+index + 1, {
        displayedStep: +index + 1,
        title: step,
        selectedStep: defaultProps.activeStep + 1,
      });
    }
  });
});
