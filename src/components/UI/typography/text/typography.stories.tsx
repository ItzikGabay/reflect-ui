import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './typography';
import React from 'react';

export default {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Text = Template.bind({});
Text.args = {
  label: 'example',
  variant: 'xLarge',
};
