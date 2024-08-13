import type { Meta, StoryObj } from '@storybook/react';
import { FormControls } from './index';

const meta = {
  title: 'Design System/form/organisms/FormControls',
  component: FormControls,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
