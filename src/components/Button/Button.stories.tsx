import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Save',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};
