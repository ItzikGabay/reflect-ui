import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseButton } from './base-button';

export default {
  title: 'UI/Buttons',
  component: BaseButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Text = Template.bind({});
Text.args = {
  label: 'example',
  variant: 'primary',
};
