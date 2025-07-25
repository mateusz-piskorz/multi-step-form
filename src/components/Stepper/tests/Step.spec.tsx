import { render, screen } from '@testing-library/react';
import { Step } from '../Step';

const defaultProps = {
  title: 'mockedTitle',
  displayedStep: 1,
  selectedStep: 1,
};

describe('Step', () => {
  test('renders step', () => {
    render(<Step {...defaultProps} />);

    const indexEl = screen.getByText(defaultProps.displayedStep);
    expect(indexEl).toBeInTheDocument();
    expect(indexEl).not.toHaveClass('selected');
  });

  test('renders title', () => {
    render(<Step {...defaultProps} />);

    const titleEl = screen.getByText(defaultProps.title.toUpperCase());
    expect(titleEl).toBeInTheDocument();
  });
});
