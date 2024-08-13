import type { Meta, StoryObj } from '@storybook/react';
import { SummaryItem } from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Design System/form/molecules/SummaryItem',
  component: SummaryItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#333',
        },
        {
          name: 'blue',
          value: 'hsl(217, 100%, 97%)',
        },
      ],
    },
  },
  tags: ['autodocs'],

  decorators: [
    (Story) => {
      return (
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof SummaryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plan: Story = {
  parameters: {
    backgrounds: {
      default: 'blue',
    },
  },
  args: {
    paymentPeriod: 'monthly',
    cost: 69,
    text: 'arcade (monthly)',
    backToPlanSelection: fn(),
    boldText: true,
  },
};

export const Addon: Story = {
  parameters: {
    backgrounds: {
      default: 'blue',
    },
  },
  args: {
    paymentPeriod: 'monthly',
    cost: 14,
    text: 'Online service (yearly)',
  },
};

export const Total: Story = {
  args: {
    paymentPeriod: 'monthly',
    cost: 150,
    boldCost: true,
    text: 'Total (per year)',
  },
};
