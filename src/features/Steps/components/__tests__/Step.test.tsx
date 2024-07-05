import { render, screen } from '@testing-library/react';
import { Step } from '../Step';

// <StepStyled>
//   <div className="index">{displayedStep}</div>
//   <div className="description">
//     <p>STEP {displayedStep}</p>
//     <h2>{title.toUpperCase()}</h2>
//   </div>

// </StepStyled>;

test('renders step', () => {
  const indexStep = 1;
  render(<Step displayedStep={indexStep} selectedStep={2} title="step" />);

  const indexEl = screen.getByText(indexStep);
  expect(indexEl).toBeInTheDocument();
  expect(indexEl).not.toHaveClass('selected');
});

test('renders title', () => {
  const titleText = 'title example';
  render(<Step displayedStep={1} selectedStep={2} title={titleText} />);

  const titleEl = screen.getByText(titleText.toUpperCase());
  expect(titleEl).toBeInTheDocument();
});

test('renders selected step', () => {
  render(<Step displayedStep={1} selectedStep={1} title="title example" />);

  const indexEl = screen.getByText(1);
  expect(indexEl).toBeInTheDocument();
  expect(indexEl).toHaveClass('selected');
});
