import type { Meta } from '@storybook/react'
import MoneyInput from './MoneyInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta  = {
  title: 'Components/MoneyInput',
  component: MoneyInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      //
    },

  },
} satisfies Meta<typeof MoneyInput>

export default meta;

type Story = Meta<typeof MoneyInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    //
  },
};


export const PrimaryHover: Story = {
  parameters: {
    pseudo: { hover: true }
  },
};


export const PrimaryFocus: Story = {
  parameters: {
    pseudo: { focus: true}
  },
};

export const PrimaryError: Story = {
  args: { required: true }
};

export const PrimaryErrorAndHover: Story = {
  args: { required: true },
  parameters: {
    pseudo: { hover: true }
  },
};

export const PrimaryErrorAndFocus: Story = {
  args: { required: true },
  parameters: {
    pseudo: {focus: true }
  },
};

export const PrimaryDisabled: Story = {
  args: { disabled: true }
};


export const PrimaryDisabledAndFocus: Story = {
  args: { disabled: true },
  parameters: {
    pseudo: {focus: true}
  },
};