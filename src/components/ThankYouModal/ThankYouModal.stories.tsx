import type { Meta, StoryObj } from '@storybook/react';
import { ThankYouModal } from './index';

const meta = {
  title: 'Design System/ThankYouModal',
  component: ThankYouModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThankYouModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
