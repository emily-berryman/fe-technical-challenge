import { Meta } from '@storybook/react'
import MoneyInput from './MoneyInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
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
    hoverStyle: {
      control: "boolean"
    },
    focusStyle: {
      control: "boolean"
    },
    errorStyle: {
      control: "boolean"
    },
    disabledStyle: {
      control: "boolean"
    },
    isLabel: {
      control: "boolean"
    },
  },
} satisfies Meta<typeof MoneyInput>

// MoneyInput Stories
export const Default = {
  args: {
    inputState: "Default",
    locale: "EN"
  }
}

export const Hover = {
  args: {
    ...Default.args,
    inputState: "Hover",
    hoverStyle: true,
  }
}

export const Focus = {
  args: {
    ...Default.args,
    inputState: "Focus",
    focusStyle: true,
  }
}

export const Error = {
  args: {
    ...Default.args,
    inputState: "Error",
    errorStyle: true,
  }
}

export const ErrorAndHover = {
  args: {
    ...Default.args,
    inputState: "Error + Hover",
    errorStyle: true,
    hoverStyle: true,
  }
}

export const ErrorAndFocus = {
  args: {
    ...Default.args,
    inputState: "Error + Focus",
    errorStyle: true,
    focusStyle: true,
    locale: "DE"
  }
}

export const Disabled = {
  args: {
    ...Default.args,
    inputState: "Disabled",
    disabledStyle: true,
  }
}

export const DisabledAndFocus = {
  args: {
    ...Default.args,
    inputState: "Disabled + Focus",
    disabledStyle: true, 
    focusStyle: true,
  }
}

export const Label = {
  args: {
    ...Default.args,
    inputState: "Default Label",
    isLabel: true,
  }
}

