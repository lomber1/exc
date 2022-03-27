import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MailListItem from '../components/MailListItem';
import { generateMail } from '../utils/data';

export default {
  title: 'Components/MailListItem',
  component: MailListItem,
} as ComponentMeta<typeof MailListItem>;

const Template: ComponentStory<typeof MailListItem> = (args) => <MailListItem {...args} />;

export const Unread = Template.bind({});
Unread.args = {
  mail: generateMail(),
};

export const Read = Template.bind({});
Read.args = {
  mail: generateMail(),
};
