import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextInput } from './text-input';

export default {
  title: 'Controls/Input/Text',
  component: TextInput,
  argTypes: {
    showError: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});
Base.args = {
  label: 'example',
  showError: false,
  errorLabel: '',
  value: 'Im a value',
};

export const Error = Template.bind({});
Error.args = {
  label: 'example',
  showError: true,
  errorLabel: 'This is a test error',
  value: 'Im a value',
};

export const Success = Template.bind({});
Success.args = {
  label: 'example',
  showSuccess: true,
  successLabel: 'This is a success message',
  value: 'Im a value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'example',
  disabled: true,
  successLabel: 'This is a success message',
  value: 'Im a value',
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  label: 'example',
  disabled: true,
  showError: true,
  errorLabel: 'This is a test error',
  successLabel: 'This is a success message',
  value: 'Im a value',
};
