import type { Meta, StoryObj } from '@storybook/react';
import { PlanRadio } from './index';
import { fn } from '@storybook/test';
import { PLANS } from '@/constants/plans';

const meta = {
  title: 'Design System/form/molecules/PlanRadio',
  component: PlanRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '130px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof PlanRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    register: fn(),
    autoFocus: true,
    name: 'name',
    paymentPeriod: 'monthly',
    plan: PLANS[0],
  },
};
