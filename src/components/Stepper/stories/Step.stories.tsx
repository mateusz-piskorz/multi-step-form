import type { Meta, StoryObj } from '@storybook/react';
import { Step } from '../Step';

const meta = {
  title: 'Design System/Stepper/Step',
  component: Step,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { displayedStep: 1, selectedStep: 2, title: 'Your Info' },
};

export const Active: Story = {
  args: { displayedStep: 1, selectedStep: 1, title: 'Select Plan' },
};
