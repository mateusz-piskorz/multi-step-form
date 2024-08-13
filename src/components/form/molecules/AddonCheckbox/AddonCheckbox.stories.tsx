import type { Meta, StoryObj } from '@storybook/react';
import { AddonCheckbox } from './index';
import { fn } from '@storybook/test';
import { ADDONS } from '@/constants/addons';

const meta = {
  title: 'Design System/form/molecules/AddonCheckbox',
  component: AddonCheckbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AddonCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    register: fn(),
    autoFocus: true,
    name: 'name',
    paymentPeriod: 'monthly',
    addon: ADDONS[0],
  },
};
