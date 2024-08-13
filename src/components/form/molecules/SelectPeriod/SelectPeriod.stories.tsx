import type { Meta, StoryObj } from '@storybook/react';
import { SelectPeriod } from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Design System/form/molecules/SelectPeriod',
  component: SelectPeriod,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '410px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof SelectPeriod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    register: fn(),
    name: 'name',
  },
};
