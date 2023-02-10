import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextInput } from './text-input';

export default {
  title: 'Controls/Input/Text',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});
Base.args = {
  label: 'Label',
};
