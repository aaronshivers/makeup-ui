import React from 'react';
import Input from './Input';

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
    id: {
      name: 'id',
      type: { name: 'string' },
      defaultValue: 'myId',
      description: 'Input Id',
    },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    primary: { control: 'boolean' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
