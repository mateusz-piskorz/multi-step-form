import type { Meta, StoryObj } from '@storybook/react';
import { SelectPlan } from './index';
import { StyledFormWrapper } from '@/App.styled';

const meta = {
  title: 'Design System/form/organisms/SelectPlan',
  component: SelectPlan,
  parameters: {
    layout: 'centered',
  },

  decorators: [
    (Story) => {
      return (
        <StyledFormWrapper
          style={{ width: '460px', height: '420px' }}
          $className=""
        >
          <Story />
        </StyledFormWrapper>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SelectPlan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
