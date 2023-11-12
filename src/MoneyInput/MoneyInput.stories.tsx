import { Meta, StoryObj } from '@storybook/react'
import MoneyInput from './MoneyInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Export a default object with a title and which component to use
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
  argTypes: {},
} satisfies Meta<typeof MoneyInput>
// type Story = StoryObj<typeof MoneyInput/>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// Each named export is a story. It's contents specify how the story is rendered in addition to other config options.
// Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the inital control values for the story. 

export const Default = {
  args: {
    inputLabel: "Default"
  }
}

export const Hover = {
  args: {
    inputLabel: "Hover",
    hoverStyle: true,
  }
}

export const Focus = {
  args: {
    inputLabel: "Focus",
    focusStyle: true,
  }
}

export const Error = {
  args: {
    inputLabel: "Error",
    errorStyle: true,
  }
}

export const ErrorAndHover = {
  args: {
    inputLabel: "Error + Hover",
    errorStyle: true,
    hoverStyle: true,
  }
}

export const ErrorAndFocus = {
  args: {
    inputLabel: "Error + Focus",
    errorStyle: true,
    focusStyle: true
  }
}

export const Disabled = {
  args: {
    inputLabel: "Disabled",
    disabledStyle: true
  }
}

export const DisabledAndFocus = {
  args: {
    inputLabel: "Disabled + Focus",
    disabledStyle: true, 
    focusStyle: true
  }
}

