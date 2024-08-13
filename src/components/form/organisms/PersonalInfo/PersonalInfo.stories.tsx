import type { Meta, StoryObj } from '@storybook/react';
import { PersonalInfo } from './index';
import { StyledFormWrapper } from '@/App.styled';

const meta = {
  title: 'Design System/form/organisms/PersonalInfo',
  component: PersonalInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
} satisfies Meta<typeof PersonalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
