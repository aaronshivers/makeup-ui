import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
  description: 'An input.',
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string' },
      defaultValue: 'Hello',
      description: 'input label',
    },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    primary: { control: 'boolean' },
  },
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {};
