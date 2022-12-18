import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Clock from './Clock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Component/Clock',
  component: Clock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const LongDate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongDate.args = {
  timeType: 'long',
};

export const ShortDate = Template.bind({});
ShortDate.args = {
  timeType: 'short',
};
