import { render, screen } from '@testing-library/react';
import { Cost } from './index';

const defaultProps = { cost: 50, period: 'monthly' } as const;

describe('Cost', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('displays a cost with monthly period', () => {
    render(<Cost {...defaultProps} />);
    expect(screen.getByText(`$${defaultProps.cost}/mo`)).toBeInTheDocument();
  });

  test('displays a cost with yearly period', () => {
    render(<Cost {...defaultProps} period={'yearly'} />);
    expect(screen.getByText(`$${defaultProps.cost}/yr`)).toBeInTheDocument();
  });

  test('displays a cost with plus icon', () => {
    render(<Cost {...defaultProps} plusIcon />);
    expect(screen.getByText(`+$${defaultProps.cost}/mo`)).toBeInTheDocument();
  });
});
