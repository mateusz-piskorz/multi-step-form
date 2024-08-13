import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../index';

const meta = {
  title: 'Design System/Stepper/index',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '200px', height: '500px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { activeStep: 1, stepsArr: ['first step', 'Select Plan'] },
};
