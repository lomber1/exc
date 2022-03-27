import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const UnChecked = Template.bind({});
Checked.args = {
  checked: false,
};
