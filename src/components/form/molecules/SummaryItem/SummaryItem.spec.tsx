import { render, screen } from '@testing-library/react';
import { SummaryItem } from './index';

const defaultProps = {
  text: 'mockedText',
  cost: 69,
  paymentPeriod: 'monthly',
} as const;

const Cost = jest.fn();
jest.mock('../../atoms/Cost', () => ({
  Cost: jest.fn((props) => Cost(props)),
}));

describe('SummaryItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays text', () => {
    render(<SummaryItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('displays change button', () => {
    const backToPlanSelection = jest.fn();
    render(
      <SummaryItem
        {...defaultProps}
        backToPlanSelection={backToPlanSelection}
      />,
    );
    screen.getByRole('button', { name: 'Change' }).click();
    expect(backToPlanSelection).toHaveBeenCalled();
  });

  it('renders Cost', () => {
    render(<SummaryItem {...defaultProps} />);
    expect(Cost).toHaveBeenCalledWith({
      bold: undefined,
      cost: defaultProps.cost,
      period: defaultProps.paymentPeriod,
      gray: true,
    });
  });

  it('renders Cost bold', () => {
    render(<SummaryItem {...defaultProps} boldCost />);
    expect(Cost).toHaveBeenCalledWith(
      expect.objectContaining({
        bold: true,
      }),
    );
  });
});
