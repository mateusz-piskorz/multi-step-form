import type { Meta, StoryObj } from '@storybook/react';
import { Cost } from './index';

const meta = {
  title: 'Design System/form/atoms/Cost',
  component: Cost,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    cost: 69,
    period: 'monthly',
    bold: false,
    gray: false,
    plusIcon: false,
  },
} satisfies Meta<typeof Cost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Yearly: Story = {
  args: {
    period: 'yearly',
  },
};
export const Bold: Story = {
  args: {
    bold: true,
  },
};
export const Gray: Story = {
  args: {
    gray: true,
  },
};
export const PlusIcon: Story = {
  args: {
    plusIcon: true,
  },
};
