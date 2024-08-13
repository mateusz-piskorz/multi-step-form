import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'Design System/form/atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    name: 'name',
    register: fn(),
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    autoFocus: true,
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    name: 'name',
    register: fn(),
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    autoFocus: true,
    errorMessage: 'String must contain at least 3 character(s)',
  },
};
