import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Design System/form/atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'name',
    register: fn(),
  },
};
